/**
 * Created by beuttlerma on 05.07.17.
 */

var express = require('express');
var router = express.Router();
var marketplaceCore = require('../connectors/marketplace_core_connector');
var logger = require('../global/logger');

router.get('/me', function (req, res, next) {


    marketplaceCore.getUserInfo(1, req.user.intTokenInfo, function (err, jsonData) {
        res.json(jsonData)
    });
});

module.exports = router;