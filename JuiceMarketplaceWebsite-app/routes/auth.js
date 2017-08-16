/**
 * Created by beuttlerma on 02.06.17.
 */
var express = require('express');
var logger = require('../global/logger');

module.exports = function (passport) {
    var router = express.Router();

    // LOGOUT ==============================
    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/login.html');
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
            successRedirect: req.session.redirectTo,
            failureRedirect: '/',
            failureFlash: true
        })(req, res, next);
    });

    return router;
};