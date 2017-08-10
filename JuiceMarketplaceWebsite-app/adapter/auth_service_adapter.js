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

self.login = function (strategy, username, password, callback) {
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
        username: username,
        password: password,
        oauth_provider: strategy
    };

    request(options, function (e, r, jsonData) {
        logger.debug('Response from OAUTH Server: ' + JSON.stringify(jsonData));
        const err = logger.logRequestAndResponse(e, options, r, jsonData);

        callback(err, jsonData);
    });

};


self.signUp = function (firstName, lastName, email, password, callback) {
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
        '/users',
        {}
    );


    options.body = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    };

    request(options, function (e, r, jsonData) {
        logger.debug('Response from OAUTH Server: ' + JSON.stringify(jsonData));
        const err = logger.logRequestAndResponse(e, options, r, jsonData);


        var userId = null;
        if (r && r.headers['location']) {
            userId = r.headers['location'].substr(r.headers['location'].lastIndexOf('/') + 1);
        }
        callback(err, userId);
    });

};


self.refreshTokenForUser = function (user, callback) {
    if (new Date(user.token.accessTokenExpiresAt) > new Date()) {
        callback(null, user);
        return;
    }

    if (new Date(user.token.refreshTokenExpiresAt) > new Date()) {
        callback(new Error('RefreshTokenExpired'));
        return;
    }

    // Refresh access token
    var options = buildOptionsForRequest(
        'POST',
        'http',
        CONFIG.HOST_SETTINGS.OAUTH_SERVER.HOST,
        CONFIG.HOST_SETTINGS.OAUTH_SERVER.PORT,
        '/oauth/token',
        {}
    );


    options.form = {
        grant_type: 'refresh_token',
        refresh_token: user.token.refreshToken
    };

    request(options, function (e, r, jsonData) {
        logger.debug('Response from OAUTH Server: ' + JSON.stringify(jsonData));
        const err = logger.logRequestAndResponse(e, options, r, jsonData);

        callback(err, jsonData);
    });
};

self.getUserInfoForToken = function (token, callback) {
    if (typeof(callback) !== 'function') {
        callback = function (err, data) {
            logger.warn('Callback not handled by caller');
        };
    }

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.OAUTH_SERVER.HOST,
        CONFIG.HOST_SETTINGS.OAUTH_SERVER.PORT,
        '/userinfo',
        {
            access_token: token
        }
    );

    request(options, function (e, r, jsonData) {
        logger.debug('Response from OAUTH Server: ' + JSON.stringify(jsonData));
        const err = logger.logRequestAndResponse(e, options, r, jsonData);

        callback(err, jsonData);
    });

};

self.getImageForUser = function (user, callback) {
    if (typeof(callback) !== 'function') {

        callback = function () {
            logger.info('Callback not registered');
        }
    }

    var options = buildOptionsForRequest(
        'GET',
        'http',
        CONFIG.HOST_SETTINGS.OAUTH_SERVER.HOST,
        CONFIG.HOST_SETTINGS.OAUTH_SERVER.PORT,
        '/users/' + user.token.user + '/image',
        {}
    );
    options.headers.authorization = 'Bearer ' + user.token.accessToken;
    options.encoding = null;

    request(options, function (e, r, imageBuffer) {
        var err = logger.logRequestAndResponse(e, options, r, imageBuffer);

        callback(err, {
            imageBuffer: imageBuffer,
            contentType: r ? r.headers['content-type'] : null
        });
    });
};

module.exports = self;