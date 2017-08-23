/**
 * Created by beuttlerma on 05.07.17.
 */

var express = require('express');
var router = express.Router();
var marketplaceCore = require('../adapter/marketplace_core_adapter');
var authService = require('../adapter/auth_service_adapter');
var programConverter = require('../services/program_converter');
var logger = require('../global/logger');
var helper = require('../services/helper_service');

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
    marketplaceCore.getRecipesForUser(req.params['id'], req.user.token.accessToken, function (err, recipes) {
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

    console.log(req.body);
    var recipe = req.body;
    var program = recipe['program'];

    // recipe information for further processing
    var title = recipe['title'];
    var shortDescription = recipe['short-description'];
    var description = recipe['description'];
    var licenseFee = recipe['license-fee'];
    var machineProgram = programConverter.convertProgramToMachineProgram(program);
    var componentsIds = [];
    program['sequences'].forEach(function (sequence) {
        componentsIds.push(sequence['ingredient-id']);
    });

    var coreData = {};

    coreData.technologyDataName = title;
    coreData.technologyData = JSON.stringify(machineProgram);
    coreData.technologyDataDescription = description;
    coreData.technologyUUID = CONFIG.TECHNOLOGY_UUID;
    coreData.licenseFee = licenseFee * 100000;
    coreData.componentList = componentsIds;

    marketplaceCore.saveRecipeForUser(req.user.token, coreData, function (err, recipeId) {
        if (err) {
            return next(err);
        }

        const fullUrl = helper.buildFullUrlFromRequest(req);
        res.set('Location', fullUrl + 'recipes/' + recipeId);
        res.sendStatus(201);
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

        const fullUrl = helper.buildFullUrlFromRequest(req);
        res.set('Location', fullUrl + recipeId);
        res.sendStatus(201);
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