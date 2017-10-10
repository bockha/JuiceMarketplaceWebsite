/**
 * Created by beuttlerma on 02.06.17.
 */
const express = require('express');
const logger = require('../global/logger');
const config = require('../config/config_loader');

module.exports = function (passport) {
    var router = express.Router();

    // LOGOUT ==============================
    router.get('/logout', function (req, res) {
        req.logout();

        const hostUrl = req.protocol + '://' + req.get('host');

        const authServerLogout =
            config.HOST_SETTINGS.OAUTH_SERVER.PROTOCOL
            + '://' + config.HOST_SETTINGS.OAUTH_SERVER.HOST
            + ':' + config.HOST_SETTINGS.OAUTH_SERVER.PORT
            + '/passport/logout?redirect='
            + encodeURIComponent(hostUrl);

        res.redirect(authServerLogout);
    });

    // =============================================================================
    // AUTHENTICATE (IUNO) ==================================================
    // =============================================================================

    router.get('/iuno', function (req, res, next) {
        logger.info('iuno login');

        passport.authenticate('iuno')(req, res, next);
    });
    router.get('/iuno/callback', function (req, res, next) {
        logger.info('iuno callback');

        passport.authenticate('iuno', {
            successRedirect: req.cookies.redirectTo || '/console',
            failureRedirect: '/',
            failureFlash: true
        })(req, res, next);
    });

    return router;
};