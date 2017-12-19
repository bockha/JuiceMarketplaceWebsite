/**
 * Created by beuttlerma on 07.02.17.
 */

const self = {};

const https = require('https');
const logger = require('../global/logger');
const CONFIG = require('../config/config_loader');
const request = require('request');
const Component = require('../model/component');
const Recipe = require('../model/recipe');
const helper = require('../services/helper_service');

//<editor-fold desc="Build Options">
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
//</editor-fold>

//<editor-fold desc="Components">
// Get all Components
self.getAllComponents = function (accessToken, callback) {
    if (typeof(callback) !== 'function') {

        callback = function () {
            logger.info('Callback not registered');
        }
    }

    const options = buildOptionsForRequest(
        'GET',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PROTOCOL,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/components',
        {

        }
    );
    options.headers.authorization = 'Bearer ' + accessToken;

    request(options, function (e, r, jsonData) {
        const err = logger.logRequestAndResponse(e, options, r, jsonData);
        const components = [];

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
//</editor-fold>

//<editor-fold desc="Administrate Recipes">
// Get Recipes
self.getRecipesForUser = function (userId, accessToken, callback) {

    if (typeof(callback) !== 'function') {

        callback = function () {
            logger.info('Callback not registered');
        }
    }

    const options = buildOptionsForRequest(
        'GET',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PROTOCOL,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/technologydata',
        {
            user: userId
        }
    );

    options.headers.authorization = 'Bearer ' + accessToken;

    request(options, function (e, r, jsonData) {
        const err = logger.logRequestAndResponse(e, options, r, jsonData);

        if (err) {
            return callback(err, null);
        }

        const components = [];

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

// Save Recipe
self.saveRecipeForUser = function (token, recipeData, callback) {
    if (typeof(callback) !== 'function') {

        callback = function () {
            logger.info('Callback not registered');
        }
    }

    const options = buildOptionsForRequest(
        'POST',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PROTOCOL,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/technologydata',
        {

        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

    options.body = recipeData;

    request(options, function (e, r, jsonData) {
        const err = logger.logRequestAndResponse(e, options, r, jsonData);

        if (err) {
            return callback(err);
        }
        let recipeId = null;

        if (r.headers['location']) {
            recipeId = r.headers['location'].substr(r.headers['location'].lastIndexOf('/') + 1)
        }

        callback(err, recipeId);
    });
};

//Delete Recipe
self.deleteRecipe = function (token, recipeID, callback) {

    const options = buildOptionsForRequest(
        'DELETE',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PROTOCOL,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/technologydata/' + recipeID + '/delete',
        {

        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

    doRequest(options, callback);
};
//</editor-fold>

//<editor-fold desc="Dashboard (Public) Reports">
self.getTechnologyDataHistory = function (from, to, token, callback) {

    const options = buildOptionsForRequest(
        'GET',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PROTOCOL,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/reports/technologydata/history',
        {
            from: from,
            to: to
        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

    doRequest(options, callback);
};

self.getTopComponents = function (from, to, limit, token, callback) {

    const options = buildOptionsForRequest(
        'GET',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PROTOCOL,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/reports/components/top',
        {
            from: from ,
            to: to,
            limit: limit
        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

    doRequest(options, callback);
};

self.getTopTechnologyData = function (from, to, limit, token, callback) {

    const options = buildOptionsForRequest(
        'GET',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PROTOCOL,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/reports/technologydata/top',
        {
            from: from,
            to: to,
            limit: limit
        }
    );

    options.headers.authorization = 'Bearer ' + token.accessToken;

    doRequest(options, callback);
};

self.getTotalRevenue = function (from, to, detail, token, callback) {

    const options = buildOptionsForRequest(
        'GET',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PROTOCOL,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/reports/revenue',
        {
            from: from,
            to: to,
            detail: detail
        }
    );
    options.headers.authorization = 'Bearer ' + token.accessToken;

    doRequest(options, callback);
};
//</editor-fold>

//<editor-fold desc="User (Non-Public) Reports">
// getRevenueForUser
self.getRevenueForUser = function (user, from, to, accessToken, callback) {

    const options = buildOptionsForRequest(
        'GET',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PROTOCOL,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/reports/revenue/user',
        {
            user: user,
            from: from,
            to: to
        }
    );
    options.headers.authorization = 'Bearer ' + accessToken;

    doRequest(options, callback);
};
// getRevenueHistory
self.getRevenueHistory = function (accessToken, from, to, callback) {

    const options = buildOptionsForRequest(
        'GET',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PROTOCOL,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/reports/revenue/technologydata/history',
        {
            from: from,
            to: to
        }
    );
    options.headers.authorization = 'Bearer ' + accessToken;

    doRequest(options, callback);
};
// getTopTechnologyDataForUser
self.getTopTechnologyDataForUser = function (user, accessToken, from, to, limit, token, callback) {

    const options = buildOptionsForRequest(
        'GET',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PROTOCOL,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/reports/technologydata/top',
        {
            from: from,
            to: to,
            limit: limit,
            user: user
        }
    );
    options.headers.authorization = 'Bearer ' + accessToken;

    doRequest(options, callback);
};
//</editor-fold>



self.getCumulatedVaultBalanceForUser = function(user, accessToken, callback){
    const options = buildOptionsForRequest(
        'GET',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PROTOCOL,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/vault/users/'+user+'/balance',
        null);
    options.headers.authorization = 'Bearer ' + accessToken;

    doRequest(options, callback);
};

self.getVaultWalletsForUser = function(user, accessToken, callback){
    const options = buildOptionsForRequest(
        'GET',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PROTOCOL,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/vault/users/'+user+'/wallets',
        null);
    options.headers.authorization = 'Bearer ' + accessToken;

    doRequest(options, callback);
};

self.getActivatedLicenseCountForUser = function (user, accessToken, callback) {

    const options = buildOptionsForRequest(
        'GET',
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PROTOCOL,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.HOST,
        CONFIG.HOST_SETTINGS.MARKETPLACE_CORE.PORT,
        '/reports/licenses/count',
        {
            activated: true,
            user: user
        }
    );
    options.headers.authorization = 'Bearer ' + accessToken;

    doRequest(options, callback);
};

module.exports = self;



// --- FUNCTIONS ---
function doRequest(options, callback) {
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
            const err = {
                status: r.statusCode,
                message: jsonData
            };
            logger.warn('Call not successful: Options: ' + JSON.stringify(options) + ' Error: ' + JSON.stringify(err));
            callback(err);

            return;
        }

        callback(null, jsonData);
    });
}