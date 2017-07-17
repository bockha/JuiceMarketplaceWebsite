/**
 * Created by beuttlerma on 05.07.17.
 */

var express = require('express');
var router = express.Router();
var marketplaceCore = require('../connectors/marketplace_core_connector');
var authService = require('../connectors/auth_service_connector');

var logger = require('../global/logger');


/**
 * Retrieves the user information for the logged in user
 */
router.get('/me', function (req, res, next) {

    authService.getUserInfoForToken(req.user.intTokenInfo.accessToken, function (err, data) {
        if (err) {
            return next(err);
        }

        res.json(data);
    });

});

router.get('/me/*', function (req, res, next) {

    //TODO: Replace users.id with internal userUUID
    var redirectPath = req.originalUrl.replace('/me/', '/' + req.user.intTokenInfo.user + '/');

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

    res.send('Not implemented yet');
});

/**
 * Saves a recipe for a specific user
 */
router.post('/:id/recipes', function (req, res, next) {

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

    res.send('Not implemented yet');
});
module.exports = router;