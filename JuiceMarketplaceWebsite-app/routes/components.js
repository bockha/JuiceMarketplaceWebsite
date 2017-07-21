/**
 * Created by beuttlerma on 10.07.17.
 */

var express = require('express');
var router = express.Router();
var marketplaceCore = require('../adapter/marketplace_core_adapter');
var logger = require('../global/logger');

router.get('/', function (req, res, next) {

    var userUUUID = req.user.intTokenInfo.user;
    var token = req.user.intTokenInfo.accessToken;

    marketplaceCore.getAllComponents(userUUUID, token, function (err, components) {

        if (err) {
            next(err);
            return;
        }

        res.json(components);
    });
});

module.exports = router;
