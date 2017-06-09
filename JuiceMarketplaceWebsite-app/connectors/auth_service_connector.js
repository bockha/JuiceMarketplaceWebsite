/**
 * Created by beuttlerma on 02.06.17.
 */


var logger = require('../global/logger');

var self = {};



self.linkProfileToExistingAccount = function(strategy, token, profile, callback) {
    if (typeof(callback) !== 'function') {
        callback = function(err, data) {
            logger.warn('Callback not handled by caller');
        };
    }

    throw {name: "NotImplementedError", message: "Function not implemented yet"}; //TODO: Implement this function if needed
};

self.getDefaultScope = function(strategy, token, profile, callback) {
    if (typeof(callback) !== 'function') {
        callback = function(err, data) {
            logger.warn('Callback not handled by caller');
        };
    }

    throw {name: "NotImplementedError", message: "Function not implemented yet"}; //TODO: Implement this function if needed
};

module.exports = self;