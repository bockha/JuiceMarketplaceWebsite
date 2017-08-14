/**
 * Created by beuttlerma on 02.06.17.
 */
var express = require('express');
var logger = require('../global/logger');

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/login.html');
}

module.exports = function (passport) {
    var router = express.Router();

    // LOGOUT ==============================
    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/login.html');
    });


    // =============================================================================
    // AUTHENTICATE (GOOGLE) ==================================================
    // =============================================================================

    router.get('/google', function (req, res, next) {
        logger.info('google login');

        passport.authenticate('google', {
            scope: ['profile', 'email'],
            approvalPrompt: 'force'
        })(req, res, next);
    });

    router.get('/google/callback', function (req, res, next) {
        logger.info('google callback');

        passport.authenticate('google', {
            successRedirect: '/console/console.html',
            failureRedirect: '/login.html',
            failureFlash: true
        })(req, res, next);
    });

    // =============================================================================
    // AUTHENTICATE (TWITTER) ==================================================
    // =============================================================================

    router.get('/twitter', function (req, res, next) {
        logger.info('twitter login');

        passport.authenticate('twitter', {
            scope: 'email',
            approvalPrompt: 'force'
        })(req, res, next);
    });

    router.get('/twitter/callback', function (req, res, next) {
        logger.info('twitter callback');

        passport.authenticate('twitter', {
            successRedirect: '/console/console.html',
            failureRedirect: '/login.html',
            failureFlash: true
        })(req, res, next);
    });

    // =============================================================================
    // AUTHENTICATE (IUNO) ==================================================
    // =============================================================================

// process the login form
    router.post('/login', function (req, res, next) {
        logger.info('iuno login');

        passport.authenticate('local-login', {
            successRedirect: '/console/console.html',
            failureRedirect: '/login.html',
            failureFlash: true
        })(req, res, next);
    });
    router.post('/signup', function (req, res, next) {
        logger.info('iuno signup');

        passport.authenticate('local-signup', {
            successRedirect: '/console/console.html',
            failureRedirect: '/login.html',
            failureFlash: true
        })(req, res, next);
    });

    return router;
};