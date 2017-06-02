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

    // =============================================================================
    // AUTHENTICATE (FIRST LOGIN) ==================================================
    // =============================================================================

    router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

    router.get('/google/callback', passport.authenticate('google', {
        successRedirect: 'https://www.google.de/search?q=Success',
        failureRedirect: 'https://www.google.de/search?q=Failure'
    }));


// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================

// google ---------------------------------
    router.get('/unlink/google', isLoggedIn, function (req, res, next) {
        logger.debug('unlink google');
        //TODO: Remove google account from user profile
    });


    return router;
};