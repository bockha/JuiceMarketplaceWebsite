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
    console.log("start query...");
    marketplaceCore.getRevenueHistory(
        token['accessToken'],
        req.query['from'],
        req.query['to'],
        function (err, recipes) {
            console.log("done query, possible error = "+err);
            if (err) {
                return next(err);
            }
            console.log("sending recipes: "+recipes);
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
        parseInt(req.query['limit']),
        token, function (err, recipes) {
            if (err) {
                return next(err);
            }
            res.send(recipes);
        });
});


module.exports = router;