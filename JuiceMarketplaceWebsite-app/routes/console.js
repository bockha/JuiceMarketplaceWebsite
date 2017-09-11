const marketplaceCore = require('../adapter/marketplace_core_adapter');
const authService = require('../adapter/auth_service_adapter');
const express = require('express');
const router = express.Router();
const CONFIG = require('../config/config_loader');
const logger = require('../global/logger');

router.get('/', function (req, res, next) {
    res.redirect('myreports');
    // res.render('console/configurator', {
    //     query: req.query,
    // });
});

function getUserInfo(req, res, next) {
    authService.getUserInfoForToken(req.user.token.accessToken, function (err, data) {
        if (err) {
            return next(err);
        }
        res.locals.user = data;
        res.locals.userDisplayName = getUserDisplayName(data);
        return next();
    });
}

function getUserDisplayName(data) {
    if (data.firstname && data.lastname) {
        return data.firstname + " " + data.lastname;
    }

    if (data.username) {
        return data.username;
    }

    if (data.firstname) {
        return data.firstname;
    }

    if (data.lastname) {
        return data.lastname;
    }
    return 'Anonymous';
}

router.get('/configurator', getUserInfo, function (req, res, next) {    
    // Check if user can still publish recipes or if his limit is reached.
    marketplaceCore.getRecipesForUser(req.user.token.user, req.user.token.accessToken, function (err, recipes) {
        if (err) {
            return next(err);
        }
        if (recipes.length >= CONFIG.RECIPE_LIMIT_PER_USER) {
            logger.info("Max number of recipes reached. Redirecting to myrecipes.")
            res.render('console/myrecipes', {
                request: req,
                response: res,
                errorMaxRecipes: true,
            });
        } else {
            res.render('console/configurator', {
                request: req,
                response: res,
            });
        }
    });
});

router.get('/myreports', getUserInfo, function (req, res, next) {
    res.render('console/myreports', {
        request: req,
        response: res,
    });
});

router.get('/myrecipes', getUserInfo, function (req, res, next) {
    res.render('console/myrecipes', {
        request: req,
        response: res,
    });
});

module.exports = router;
