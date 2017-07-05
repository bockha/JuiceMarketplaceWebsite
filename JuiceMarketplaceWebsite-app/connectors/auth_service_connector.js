/**
 * Created by beuttlerma on 02.06.17.
 */


var logger = require('../global/logger');
const CONFIG = require('../config/config_loader');
var request = require('request');

var self = {};

function buildOptionsForRequest(method, protocol, host, port, path, qs) {

    return {
        method: method,
        url: protocol + '://' + host + ':' + port + path,
        qs: qs,
        json: true,
        headers: {
            'Authorization': 'Basic ' + new Buffer(CONFIG.OAUTH_CREDENTIALS.CLIENT_ID + ':' + CONFIG.OAUTH_CREDENTIALS.CLIENT_SECRET).toString('base64')
        }
    }
}

self.linkProfileToExistingAccount = function (strategy, token, profile, callback) {
    if (typeof(callback) !== 'function') {
        callback = function (err, data) {
            logger.warn('Callback not handled by caller');
        };
    }

    return;
    throw {name: "NotImplementedError", message: "Function not implemented yet"}; //TODO: Implement this function if needed
};

self.login = function (strategy, token, profile, callback) {
    if (typeof(callback) !== 'function') {
        callback = function (err, data) {
            logger.warn('Callback not handled by caller');
        };
    }

    var options = buildOptionsForRequest(
        'POST',
        'http',
        CONFIG.HOST_SETTINGS.OAUTH_SERVER.HOST,
        CONFIG.HOST_SETTINGS.OAUTH_SERVER.PORT,
        '/oauth/token',
        {}
    );


    options.form = {
        grant_type: 'password',
        username: profile.id,
        password: token,
        oauth_provider: strategy
    };

    request(options, function (e, r, jsonData) {
        logger.debug('Response from OAUTH Server: ' + JSON.stringify(jsonData));
        if (e) {
            logger.crit(e);

            callback(e);
        }

        if (r && r.statusCode !== 200) {
            var err = {
                status: r.statusCode,
                message: jsonData
            };
            logger.warn(err);
            callback(err);

            return;
        }

        callback(null, jsonData);
    });

};

module.exports = self;