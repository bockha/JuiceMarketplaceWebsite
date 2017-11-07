var express = require('express');
var router = express.Router();
var marketplaceCore = require('../adapter/marketplace_core_adapter');
const authService = require('../adapter/auth_service_adapter');

router.get('/revenue', function (req, res, next) {
    authService.getPublicToken(function (err, token) {
        if (err) {
            return next(err);
        }

        marketplaceCore.getTotalRevenue(  req.query['from'],
            req.query['to'],
            req.query['detail'],
            token, function (err, data) {
                if (err) {
                    res.status(500);
                    res.send('Error when requesting data from the marketplace core');

                    return;
                }

                res.json(data);
            })
    });
});

router.get('/revenue/history', function (req, res, next) {
    authService.getPublicToken(function (err, token) {
        if (err) {
            return next(err);
        }

        marketplaceCore.getRevenueHistory(  req.query['from'],
                                            req.query['to'],
                                            req.query['detail'],
                                            token, function (err, data) {
            if (err) {
                res.status(500);
                res.send('Error when requesting data from the marketplace core');

                return;
            }

            res.json(data);
        })
    });
});

router.get('/recipes/history', function (req, res, next) {
    authService.getPublicToken(function (err, token) {
        if (err) {
            return next(err);
        }

        marketplaceCore.getTechnologyData(req.query['from'],
                                          req.query['to'],
                                          req.query['detail'],
                                          token, function (err, data) {
            if (err) {
                res.status(500);
                res.send('Error when requesting data from the marketplace core');

                return;
            }

            res.json(data);
        })
    });
});

router.get('/recipes/top', function (req, res, next) {
    authService.getPublicToken(function (err, token) {
        if (err) {
            return next(err);
        }

        marketplaceCore.getTopTechnologyData(req.query['from'],
                                             req.query['to'],
                                             req.query['limit'],
                                             token, function (err, data) {
            if (err) {
                res.status(500);
                res.send('Error when requesting data from the marketplace core');

                return;
            }

            res.json(data);
        })
    });
});

router.get('/components/top', function (req, res, next) {
    authService.getPublicToken(function (err, token) {
        if (err) {
            return next(err);
        }

        marketplaceCore.getTopComponents(req.query['from'],
                                        req.query['to'],
                                        req.query['limit'],
                                        token, function (err, data) {
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
