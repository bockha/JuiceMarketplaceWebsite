var express = require('express');
var router = express.Router();
var marketplaceCore = require('../adapter/marketplace_core_adapter');
const authService = require('../adapter/auth_service_adapter');

router.get('/', function (req, res, next) {

    authService.getPublicToken(function (err, token) {
        if (err) {
            return next(err);
        }

        marketplaceCore.getTopDrinksSince(token, req.query['sinceDate'], req.query['topValue'], function (err, data) {
            if (err) {
                res.status(500);
                res.send('Error when requesting data from the marketplace core');

                return;
            }

            res.json(data);
        })
    });
});

router.get('/favorit', function (req, res, next) {
    authService.getPublicToken(function (err, token) {
        if (err) {
            return next(err);
        }

        marketplaceCore.getFavoriteJuicesSince(token, req.query['sinceDate'], function (err, data) {
            if (err) {
                res.status(500);
                res.send('Error when requesting data from the marketplace core');

                return;
            }

            res.json(data);
        })
    });

});

router.get('/workload', function (req, res, next) {
    authService.getPublicToken(function (err, token) {
        if (err) {
            return next(err);
        }


        marketplaceCore.getWorkloadSince(token, req.query['sinceDate'], function (err, data) {
            if (err) {
                res.status(500);
                res.send('Error when requesting data from the marketplace core');

                return;
            }

            res.json(data);
        })
    });
});

router.get('/revenue', function (req, res, next) {
    authService.getPublicToken(function (err, token) {
        if (err) {
            return next(err);
        }

        marketplaceCore.getRevenueSince(token, req.query['sinceDate'], req.query['time'], function (err, data) {
            if (err) {
                res.status(500);
                res.send('Error when requesting data from the marketplace core');

                return;
            }

            res.json(data);
        })
    });
});

module.exports = router;
