/**
 * Created by beuttlerma on 02.06.17.
 */
var express = require('express');
var logger = require('../global/logger');

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

module.exports = function (passport) {
    var router = express.Router();

    // LOGOUT ==============================
    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });


    // =============================================================================
    // AUTHENTICATE (FIRST LOGIN) ==================================================
    // =============================================================================

    router.get('/google', function (req, res) {
        logger.info('google login');

        passport.authenticate('google', {
            scope: ['profile', 'email'],
            accessType: 'offline', approvalPrompt: 'force'
        })(req, res);
    });

    router.get('/google/callback', function (req, res) {
        logger.info('google callback');

        passport.authenticate('google', {
            successRedirect: '/profile.html',
            failureRedirect: '/',
            failureFlash: true,
            successFlash: 'Success!'
        })(req, res);
    });


    // =============================================================================
    // UNLINK ACCOUNTS =============================================================
    // =============================================================================

    // google ---------------------------------
    router.get('/unlink/google', isLoggedIn, function (req, res, next) {
        logger.debug('unlink google');
        logger.debug('AccessToken: ' + req.user.token);
        //TODO: Remove google account from user profile
        res.send(200);
    });

    return router;
};