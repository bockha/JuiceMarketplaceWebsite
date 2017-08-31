var express = require('express');
var router = express.Router();
var marketplaceCore = require('../adapter/marketplace_core_adapter');

router.get('/', function (req, res, next) {

    var token = req.user.token;
    if (req.query['topValue'] > 1) {
        marketplaceCore.getTopDrinksSinceForUser(token, req.query['sinceDate'], req.query['topValue'], function (err, data) {
            if (err) {
                res.status(500);
                res.send('Error when requesting data from the marketplace core');

                return;
            }

            res.json(data);
        });
    }
    else if (req.query['topValue'] == 1) {
        marketplaceCore.getTopDrinkForUser(token, req.query['topValue'], function (err, data) {
            if (err) {
                res.status(500);
                res.send('Error when requesting data from the marketplace core');

                return;
            }

            res.json(data);
        });
    }
});

router.get('/favorit', function (req, res, next) {

    var token = req.user.token;
    marketplaceCore.getFavoriteJuicesSinceForUser(token, req.query['sinceDate'], function (err, data) {
        if (err) {
            res.status(500);
            res.send('Error when requesting data from the marketplace core');

            return;
        }

        res.json(data);
    })
});

router.get('/workload', function (req, res, next) {

    var token = req.user.token;
    marketplaceCore.getWorkloadSinceForUser(token, req.query['sinceDate'], function (err, data) {
        if (err) {
            res.status(500);
            res.send('Error when requesting data from the marketplace core');

            return;
        }

        res.json(data);
    })
});

router.get('/revenue', function (req, res, next) {

    var token = req.user.token;
    marketplaceCore.getRevenueForUser(token, req.query['sinceDate'], req.query['time'], function (err, data) {
        if (err) {
            res.status(500);
            res.send('Error when requesting data from the marketplace core');

            return;
        }

        res.json(data);
    })
});

module.exports = router;
