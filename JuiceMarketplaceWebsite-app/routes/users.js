/**
 * Created by beuttlerma on 05.07.17.
 */

const express = require('express');
const router = express.Router();
const marketplaceCore = require('../adapter/marketplace_core_adapter');
const authService = require('../adapter/auth_service_adapter');
const programConverter = require('../services/program_converter');
const logger = require('../global/logger');
const helper = require('../services/helper_service');
const encryption = require('../services/encryption_service');

const CONFIG = require('../config/config_loader');

/**
 * Retrieves the user information for the logged in user
 */
router.get('/me', function (req, res, next) {

    authService.getUserInfoForToken(req.user.token.accessToken, function (err, data) {
        if (err) {
            return next(err);
        }

        res.json(data);
    });

});

router.all('/me/*', function (req, res, next) {

    var redirectPath = req.originalUrl.replace('/me/', '/' + req.user.token.user + '/');

    res.redirect(307, redirectPath);
});

/**
 * Retrieves the user information for a specific user
 */
router.get('/:id', function (req, res, next) {

    res.send('Not implemented yet');
});


/**
 * Retrieves all recipes for the user
 */
router.get('/:id/recipes', function (req, res, next) {
    marketplaceCore.getRecipesForUser(req.params['id'], req.user.token.accessToken, function (err, recipes) {
        if (err) {
            return next(err);
        }
        res.send(recipes);
    });
});

/**
 * Returns the amount of recipes the user can still publish on the marketplace
 */
router.get('/:id/recipes/limit', function (req, res, next) {
    //TODO: Implement algorithm as discussed in #78
    marketplaceCore.getRecipesForUser(req.params['id'], req.user.token.accessToken, function (err, recipes) {
        if (err) {
            return next(err);
        }
        return res.json({limit: CONFIG.RECIPE_LIMIT_PER_USER - recipes.length});
    });
});

/**
 * Saves a recipe for a specific user
 */
router.post('/:id/recipes', function (req, res, next) {

    // Check if user can still publish recipes or if his limit is reached.
    marketplaceCore.getRecipesForUser(req.params['id'], req.user.token.accessToken, function (err, recipes) {
        if (err) {
            return next(err);
        }
        if (recipes.length >= CONFIG.RECIPE_LIMIT_PER_USER) {
            logger.warn('Recipe limit reached for user');
            res.status(400);
            return res.send('Recipe limit reached. Only a maximum of ' + CONFIG.RECIPE_LIMIT_PER_USER + ' recipes is allowed per user.');
        }

        const minPhaseAmount = 10;
        const minTotalAmount = 100;
        const maxTotalAmount = 120;
        const maxTotalPause = 5000;

        // Save recipe for user
        const recipe = req.body;
        const program = recipe['program'];

        // recipe information for further processing
        const title = recipe['title'].trim();
        const description = recipe['description'].trim();
        const licenseFee = recipe['license-fee'];
        const machineProgram = programConverter.convertProgramToMachineProgram(program);
        const machineProgramString = JSON.stringify(machineProgram);

        // check metadata
        var valid = true;
        var validText;
        if (!title || title.length < 1) {
            logger.warn('Submitted recipe: Title is missing');
            validText = 'Titel fehlt.';
            valid = false;
        }
        if (!description || description.length < 1) {
            logger.warn('Submitted recipe: Description is missing');
            validText = 'Beschreibung fehlt.';
            valid = false;
        }
        if (!licenseFee) {
            logger.warn('Submitted recipe: License Fee is missing');
            validText = 'Lizenzgebühr fehlt.';
            valid = false;
        }

        if (!valid) {
            logger.warn('Submitted recipe: Invalid metadata');
            res.status(400);
            return res.send('Ungültige Metadaten: ' + validText);
        }

        //TODO: Remove this check after issue https://github.com/IUNO-TDM/MarketplaceCore/issues/91 was fixed.
        //Check for invalid characters
        const invalidCharacters = '\'';
        for (var i in invalidCharacters) {
            const invalidChar = invalidCharacters[i];

            if (title.indexOf(invalidChar) >= 0) {
                logger.warn('Submitted recipe: Invalid metadata');
                res.status(400);
                return res.send('Ungültiges Zeichen im Titel. Bitte verwenden Sie möglichst keine Sonderzeichen.');
            }

            if (description.indexOf(invalidChar) >= 0) {
                logger.warn('Submitted recipe: Invalid metadata');
                res.status(400);
                return res.send('Ungültiges Zeichen in der Beschreibung. Bitte verwenden Sie möglichst keine Sonderzeichen.');
            }
        }


        // check total amount
        var totalAmount = 0;
        var totalPause = 0;

        var lines = machineProgram['recipe']['lines'];
        lines.forEach(function (line) {
            var components = line['components'];
            totalPause += line['sleep'];
            components.forEach(function (component) {
                var amount = component['amount'];
                totalAmount += amount;
            });
        });

        if (totalAmount > maxTotalAmount) {
            logger.warn('Submitted program exceeding max total amount size');
            validText = 'Maximal-Menge (' + maxTotalAmount + ') überschritten';
            valid = false;
        }

        if (totalAmount < minTotalAmount) {
            logger.warn('Submitted program is less than min total amount');
            validText = 'Minimal-Menge (' + minTotalAmount + ') unterschritten';
            valid = false;
        }

        if (totalPause > maxTotalPause) {
            logger.warn('Submitted program exceeding max total pause size');
            validText = 'Maximale Pausenlänge (' + maxTotalPause + ') überschritten';
            valid = false;
        }

        if (!valid) {
            logger.warn('Submitted program not valid.');
            res.status(400);
            return res.send('Ungültiges Rezept: ' + validText);
        }

        const componentsIds = [];
        program['sequences'].forEach(function (sequence) {
            componentsIds.push(sequence['ingredient-id']);
        });

        var encryptedProgram;
        // Encrypt the recipe using our own encryption before passing it to the marketplace core
        try {
            encryptedProgram = encryption.encryptData(machineProgramString);
        }
        catch (err) {
            return res.sendStatus(500);
        }

        const coreData = {};

        coreData.technologyDataName = title;
        coreData.technologyData = encryptedProgram;
        coreData.technologyDataDescription = description;
        coreData.technologyUUID = CONFIG.TECHNOLOGY_UUID;
        coreData.licenseFee = licenseFee * 100000;
        coreData.componentList = componentsIds;

        marketplaceCore.saveRecipeForUser(req.user.token, coreData, function (err, recipeId) {
            if (err.statusCode === 409) {
                res.status(409);
                return res.send('Ein Rezept mit diesem Namen existiert bereits.')
            }

            if (err) {
                return next(err);
            }

            const fullUrl = helper.buildFullUrlFromRequest(req);
            res.set('Location', fullUrl + 'recipes/' + recipeId);
            res.sendStatus(201);
        });
    });
});


/**
 * Get a specific recipe for a user
 */
router.get('/:id/recipes/:recipe_id', function (req, res, next) {

    res.send('Not implemented yet');
});


/**
 * Updates a specific recipe for a specific user
 */
router.put('/:id/recipes/:recipe_id', function (req, res, next) {

    res.send('Not implemented yet');
});

/**
 * Deletes a specific recipe for a specific user
 */
router.delete('/:id/recipes/:recipe_id', function (req, res, next) {
    marketplaceCore.deleteRecipe(req.user.token, req.params['recipe_id'], function (err, data) {
        if (err) {
            return next(err);
        }
        res.sendStatus(200);
    });
});


/**
 * Retrieves the user image
 */
router.get('/:id/image', function (req, res, next) {
    authService.getImageForUser(req.user, function (err, data) {
        if (err) {
            next(err);
            return;
        }

        if (!data) {
            res.sendStatus(404);
            return;
        }

        res.set('Content-Type', data.contentType);
        res.send(data.imageBuffer);
    });
});
module.exports = router;