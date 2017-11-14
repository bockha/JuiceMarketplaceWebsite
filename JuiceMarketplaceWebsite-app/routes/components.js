/**
 * Created by beuttlerma on 10.07.17.
 */

var express = require('express');
var router = express.Router();
var marketplaceCore = require('../adapter/marketplace_core_adapter');
var logger = require('../global/logger');

router.get('/', function (req, res, next) {
    var accessToken = req.user.token.accessToken;

    marketplaceCore.getAllComponents(accessToken, function (err, components) {

        if (err) {
            next(err);
            return;
        }

        res.json(components);
    });
});

module.exports = router;
