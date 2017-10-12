const logger = require('../../global/logger');

var self = require('./default');

logger.warn('[encryption_service] RUNNING DOCKER (SIMULATION) MODE. Data will not being encrypted!');

self.encryptData = function(data) {
    return data;
};

module.exports = self;

