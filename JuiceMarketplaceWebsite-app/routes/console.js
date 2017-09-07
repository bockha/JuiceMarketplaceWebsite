const marketplaceCore = require('../adapter/marketplace_core_adapter');
const express = require('express');
const router = express.Router();
const CONFIG = require('../config/config_loader');

router.get('/', function (req, res, next) {
    res.redirect('myreports');
    // res.render('console/configurator', {
    //     query: req.query,
    // });
});

router.get('/configurator', function (req, res, next) {    
    // Check if user can still publish recipes or if his limit is reached.
    marketplaceCore.getRecipesForUser(req.user.token.user, req.user.token.accessToken, function (err, recipes) {
        if (err) {
            return next(err);
        }
        if (recipes.length >= CONFIG.RECIPE_LIMIT_PER_USER) {
            console.log("Max number of recipes reached. Redirecting to myrecipes.")
            res.render('console/myrecipes', {
                query: req.query,
                maxRecipesError: true,
            });
            // return res.redirect('/console/myrecipes');
        } else {
            res.render('console/configurator', {
                query: req.query,
            });
        }
    });
});

router.get('/myreports', function (req, res, next) {
    res.render('console/myreports', {
        query: req.query,
    });
});

router.get('/myrecipes', function (req, res, next) {
    res.render('console/myrecipes', {
        query: req.query,
    });
});

module.exports = router;
