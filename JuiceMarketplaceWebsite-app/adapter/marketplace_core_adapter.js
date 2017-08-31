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
        '/myreports/technologydata',
        {
            userUUID: userId
        }
    );

    options.headers.authorization = 'Bearer ' + accessToken;

    request(options, function (e, r, jsonData) {
        var err = logger.logRequestAndResponse(e, options, r, jsonData);

        if (err) {
            return callback(err, null);
        }

        var components = [];

        if (helper.isArray(jsonData)) {
            jsonData.forEach(function (entry) {
                components.push(Component.CreateComponentFromJSON(entry));
            });
        }
        else {
            logger.warn('Unexpected response when retrieving components from market place core:');
        }

        callback(err, jsonData);
    });
};

self.getTopDrinkForUser = function (token, topCount, callback) {

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
        '/myreports/technologydata',
        {
            top: true,
            topValue: topCount,
            userUUID: token.user
        }
    );

    options.headers.authorization = 'Bearer ' + token.accessToken;

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

self.saveRecipeForUser = function (token, recipeData, callback) {
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
            userUUID: token.user
        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

    options.body = recipeData;

    request(options, function (e, r, jsonData) {
        var err = logger.logRequestAndResponse(e, options, r, jsonData);

        if (err) {
            return callback(err);
        }
        var recipeId = null;

        if (r.headers['location']) {
            recipeId = r.headers['location'].substr(r.headers['location'].lastIndexOf('/') + 1)
        }

        callback(err, recipeId);
    });
};


// --- REPORTS START ---
self.getTopDrinksSince = function (token, sinceDate, topCount, callback) {

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/reports',
        {
            sinceDate: sinceDate,
            topValue: topCount,
            userUUID: token.user
        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

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

self.getFavoriteJuicesSince = function (token, sinceDate, callback) {

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/reports/favorit',
        {
            sinceDate: sinceDate,
            userUUID: token.user
        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

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

self.getWorkloadSince = function (token, sinceDate, callback) {

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/reports/workload',
        {
            sinceDate: sinceDate,
            userUUID: token.user
        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

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

self.getRevenueSince = function (token, sinceDate, time, callback) {

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/reports/revenue',
        {
            sinceDate: sinceDate,
            time: time,
            userUUID: token.user
        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

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
self.getTopDrinksSinceForUser = function (token, sinceDate, topCount, callback) {

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/myreports',
        {
            sinceDate: sinceDate,
            topValue: topCount,
            userUUID: token.user
        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

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

self.getFavoriteJuicesSinceForUser = function (token, sinceDate, callback) {

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/myreports/favorit',
        {
            sinceDate: sinceDate,
            userUUID: token.user
        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

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

self.getWorkloadSinceForUser = function (token, sinceDate, callback) {

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/myreports/workload',
        {
            sinceDate: sinceDate,
            userUUID: token.user
        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

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

self.getRevenueForUser = function (token, sinceDate, time, callback) {

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/myreports/revenue',
        {
            sinceDate: sinceDate,
            time: time,
            userUUID: token.user
        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

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

self.getTotalRevenueForUser = function (token, sinceDate, time, callback) {

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/myreports/revenue',
        {
            userUUID: token.user
        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

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

// Delete Recipes
self.deleteRecipe = function (token, recipeID, time, callback) {

    var options = buildOptionsForRequest(
        'DELETE',
        'http',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/technologydata/' + recipeID + '/delete',
        {
            userUUID: token.user
        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

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

module.exports = self;