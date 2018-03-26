var self = {};

var logger = require('../global/logger');
const CONFIG = require('../config/config_loader');
var request = require('request');
var helper = require('../services/helper_service');

function buildOptionsForRequest(method, protocol, host, port, path, qs) {

    return {
        method: method,
        url: protocol + '://' + host + ':' + port + path,
        qs: qs,
        json: true
    }
}

self.createCoupon = function (callback) {
    if (typeof(callback) !== 'function') {

        callback = function () {
            logger.info('Callback not registered');
        }
    }

    var options = buildOptionsForRequest(
        'POST',
        CONFIG.HOST_SETTINGS.COUPON_SERVER.PROTOCOL,
        CONFIG.HOST_SETTINGS.COUPON_SERVER.HOST,
        CONFIG.HOST_SETTINGS.COUPON_SERVER.PORT,
        '/',
        {}
    );
    request(options, function (e, r, id) {
        var err = logger.logRequestAndResponse(e, options, r,{id:id});

        if (err) {
            return callback(err);
        }

        callback(err, id);
    });
};

self.getIosCoupon = function(id,response){

    var options = buildOptionsForRequest(
        'GET',
        CONFIG.HOST_SETTINGS.COUPON_SERVER.PROTOCOL,
        CONFIG.HOST_SETTINGS.COUPON_SERVER.HOST,
        CONFIG.HOST_SETTINGS.COUPON_SERVER.PORT,
        '/'+id+'/iosCoupon',
        {}
    );

    request(options).pipe(response);


};
self.getPdfCoupon = function(id,response){

    var options = buildOptionsForRequest(
        'GET',
        CONFIG.HOST_SETTINGS.COUPON_SERVER.PROTOCOL,
        CONFIG.HOST_SETTINGS.COUPON_SERVER.HOST,
        CONFIG.HOST_SETTINGS.COUPON_SERVER.PORT,
        '/'+id+'/pdfCoupon',
        {}
    );

    request(options).pipe(response);


};

module.exports = self;