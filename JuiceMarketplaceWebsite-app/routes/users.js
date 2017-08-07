/**
 * Created by beuttlerma on 05.07.17.
 */

var express = require('express');
var router = express.Router();
var marketplaceCore = require('../adapter/marketplace_core_adapter');
var authService = require('../adapter/auth_service_adapter');
var programConverter = require('../services/program_converter');
var logger = require('../global/logger');


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

router.get('/me/*', function (req, res, next) {

    var redirectPath = req.originalUrl.replace('/me/', '/' + req.user.token.user + '/');

    res.redirect(redirectPath);
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
    marketplaceCore.getRecipesForUser(req.query['id'], req.user.token.accessToken, function (err, recipes) {
        if (err) {
            return next(err);
        }

        res.send(recipes);
    });
});

/**
 * Saves a recipe for a specific user
 */
router.post('/:id/recipes', function (req, res, next) {

    //TODO: Parse recipe from req.body
    //TODO: Convert program
    console.log(req.body);
    var recipe = req.body;
    var program = recipe['program'];

    // recipe information for further processing
    var title = recipe['title'];
    var shortDescription = recipe['short-description'];
    var description = recipe['description'];
    var licenseFee = recipe['license-fee'];
    var machineProgram = programConverter.convertProgramToMachineProgram(program);
    var machineProgramString = JSON.stringify(machineProgram);
    var ingredientIds = [];
    program['sequences'].forEach(function(sequence) {
        ingredientIds.push(sequence['ingredient-id']);
    })


    //TODO: Encrypt program

    //TODO: Wrap program into core metadata

    // logger.log(req.body);

    var coreData = {};

    return res.sendStatus(200);
    marketplaceCore.saveRecipeForUser(req.user.token, coreData, function(err, recipe) {
       if (err) {
           return next(err);
       }

       //TODO: return recipe id
       res.sendStatus(201);
    });
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

    res.send('Not implemented yet');
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