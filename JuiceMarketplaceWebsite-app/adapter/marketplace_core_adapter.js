/**
 * Created by beuttlerma on 07.02.17.
 */

var self = {};

var https = require('https');
var logger = require('../global/logger');
const CONFIG = require('../config/config_loader');
var request = require('request');
var Component = require('../model/component');
var Recipe = require('../model/recipe');
var helper = require('../services/helper_service');

function buildOptionsForRequest(method, protocol, host, port, path, qs) {

    return {
        method: method,
        url: protocol + '://' + host + ':' + port + path,
        qs: qs,
        json: true,
        headers: {
            'Content-Type': 'application/json'
        }
    }
}

self.getAllComponents = function (userId, accessToken, callback) {
    if (typeof(callback) !== 'function') {

        callback = function () {
            logger.info('Callback not registered');
        }
    }

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/components',
        {
            userUUID: userId
        }
    );
    options.headers.authorization = 'Bearer ' + accessToken;

    request(options, function (e, r, jsonData) {
        var err = logger.logRequestAndResponse(e, options, r, jsonData);
        var components = [];

        if (helper.isArray(jsonData)) {
            jsonData.forEach(function (entry) {
                components.push(Component.CreateComponentFromJSON(entry));
            });
        }
        else {
            logger.warn('Unexpected response when retrieving components from market place core:');
        }

        callback(err, components);
    });
};

self.getRecipesForUser = function (userId, accessToken, callback) {
    if (typeof(callback) !== 'function') {

        callback = function () {
            logger.info('Callback not registered');
        }
    }

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/technologydata',
        {
            userUUID: userId
        }
    );
    options.headers.authorization = 'Bearer ' + accessToken;

    request(options, function (e, r, jsonData) {
        var err = logger.logRequestAndResponse(e, options, r, jsonData);
        var components = [];

        if (helper.isArray(jsonData)) {
            jsonData.forEach(function (entry) {
                components.push(Recipe.CreateRecipeFromJSON(entry));
            });
        }
        else {
            logger.warn('Unexpected response when retrieving components from market place core:');
        }

        callback(err, components);
    });
};

self.saveRecipeForUser = function (token, callback) {
    if (typeof(callback) !== 'function') {

        callback = function () {
            logger.info('Callback not registered');
        }
    }

    var options = buildOptionsForRequest(
        'POST',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/technologydata',
        {
            userUUID: token.user.id
        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

    request(options, function (e, r, jsonData) {
        var err = logger.logRequestAndResponse(e, options, r, jsonData);
        var recipe = null;

        logger.debug(r.header('Location'));

        //TODO: return technologyDataUUID

        callback(err, null);
    });
};


// --- REPORTS START ---
self.getTopDrinksSince = function (sinceDate, topCount, callback) {

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/reports',
        {
            sinceDate: sinceDate,
            topValue: topCount
        }
    );

    request(options, function (e, r, jsonData) {
        logger.debug('Response from MarketplaceCore: ' + JSON.stringify(jsonData));
        if (typeof(callback) !== 'function') {

            callback = function (err, data) {
                logger.warn('Callback not handled by caller');
            };
        }

        if (e) {
            logger.crit(e);

            callback(e);
        }

        if (r && r.statusCode !== 200) {
            var err = {
                status: r.statusCode,
                message: jsonData
            };
            logger.warn('Call not successful: Options: ' + JSON.stringify(options) + ' Error: ' + JSON.stringify(err));
            callback(err);

            return;
        }

        callback(null, jsonData);
    });
};

self.getFavoriteJuicesSince = function (sinceDate, callback) {

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/reports/favorit',
        {
            sinceDate: sinceDate
        }
    );

    request(options, function (e, r, jsonData) {
        logger.debug('Response from MarketplaceCore: ' + JSON.stringify(jsonData));
        if (typeof(callback) !== 'function') {

            callback = function (err, data) {
                logger.warn('Callback not handled by caller');
            };
        }

        if (e) {
            logger.crit(e);

            callback(e);
        }

        if (r && r.statusCode !== 200) {
            var err = {
                status: r.statusCode,
                message: jsonData
            };
            logger.warn('Call not successful: Options: ' + JSON.stringify(options) + ' Error: ' + JSON.stringify(err));
            callback(err);

            return;
        }

        callback(null, jsonData);
    });
};

self.getWorkloadSince = function (sinceDate, callback) {

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/reports/workload',
        {
            sinceDate: sinceDate
        }
    );

    request(options, function (e, r, jsonData) {
        logger.debug('Response from MarketplaceCore: ' + JSON.stringify(jsonData));
        if (typeof(callback) !== 'function') {

            callback = function (err, data) {
                logger.warn('Callback not handled by caller');
            };
        }

        if (e) {
            logger.crit(e);

            callback(e);
        }

        if (r && r.statusCode !== 200) {
            var err = {
                status: r.statusCode,
                message: jsonData
            };
            logger.warn('Call not successful: Options: ' + JSON.stringify(options) + ' Error: ' + JSON.stringify(err));
            callback(err);

            return;
        }

        callback(null, jsonData);
    });
};

self.getRevenueSince = function (sinceDate, time, callback) {

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/reports/revenue',
        {
            sinceDate: sinceDate,
            time: time
        }
    );

    request(options, function (e, r, jsonData) {
        logger.debug('Response from MarketplaceCore: ' + JSON.stringify(jsonData));
        if (typeof(callback) !== 'function') {

            callback = function (err, data) {
                logger.warn('Callback not handled by caller');
            };
        }

        if (e) {
            logger.crit(e);

            callback(e);
        }

        if (r && r.statusCode !== 200) {
            var err = {
                status: r.statusCode,
                message: jsonData
            };
            logger.warn('Call not successful: Options: ' + JSON.stringify(options) + ' Error: ' + JSON.stringify(err));
            callback(err);

            return;
        }

        callback(null, jsonData);
    });
};
// --- REPORTS END ---


module.exports = self;