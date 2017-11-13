const express = require('express');
const router = express.Router({mergeParams: true});
const marketplaceCore = require('../adapter/marketplace_core_adapter');

router.get('/revenue', function (req, res, next) {
    var token = req.user.token;

    marketplaceCore.getRevenueForUser(
        req.params['id'],
        req.query['from'],
        req.query['to'],
        token['accessToken'],
        function (err, recipes) {
            if (err) {
                return next(err);
            }
            res.send(recipes);
        });
});

router.get('/revenue/history', function (req, res, next) {
    var token = req.user.token;

    marketplaceCore.getRevenueHistory(
        req.params['id'],
        token['accessToken'],
        req.query['from'],
        req.query['to'],
        function (err, recipes) {
            if (err) {
                return next(err);
            }
            res.send(recipes);
        });
});

router.get('/recipes/top', function (req, res, next) {
    var token = req.user.token;

    marketplaceCore.getTopTechnologyDataForUser(
        req.params['id'],
        token['accessToken'],
        req.query['from'],
        req.query['to'],
        req.query['limit'],
        token, function (err, recipes) {
            if (err) {
                return next(err);
            }
            res.send(recipes);
        });
});
