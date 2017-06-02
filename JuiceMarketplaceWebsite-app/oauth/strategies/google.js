/**
 * Created by beuttlerma on 01.06.17.
 */

var GoogleStrategy   = require('passport-google-oauth').OAuth2Strategy;
var oAuthConfig = require('../../config/config_loader').OAUTH_PROVIDER;

var logger = require('../../global/logger');

module.exports = function(passport) {
    logger.debug('Configure google oauth');

    // =========================================================================
    // GOOGLE ==================================================================
    // =========================================================================
    passport.use(new GoogleStrategy({

            clientID        : oAuthConfig.googleAuth.clientID,
            clientSecret    : oAuthConfig.googleAuth.clientSecret,
            callbackURL     : oAuthConfig.googleAuth.callbackURL,
            passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)

        },
        function(req, token, refreshToken, profile, done) {
            logger.debug('Token: ' + token);
            logger.debug('RefreshToken: ' + refreshToken);
            logger.debug('Profile: ' + JSON.stringify(profile));
            // asynchronous
            process.nextTick(function() {


                // check if the user is already logged in
                if (!req.user) {
                    //TODO: Login the user

                } else {
                    //TODO: Link account to user
                }

                done(null, profile);
            });

        }));
};