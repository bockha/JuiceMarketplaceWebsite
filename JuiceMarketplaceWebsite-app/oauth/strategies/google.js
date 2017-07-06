/**
 * Created by beuttlerma on 01.06.17.
 */

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var oAuthConfig = require('../../config/config_loader').OAUTH_PROVIDER;
var oAuthConnector = require('../../connectors/auth_service_connector');
var logger = require('../../global/logger');
var strategyName = 'google';

module.exports = function (passport) {
    logger.debug('Configure google oauth');

    // =========================================================================
    // GOOGLE ==================================================================
    // =========================================================================
    passport.use(new GoogleStrategy({

            clientID: oAuthConfig.googleAuth.clientID,
            clientSecret: oAuthConfig.googleAuth.clientSecret,
            callbackURL: oAuthConfig.googleAuth.callbackURL,
            passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)

        },
        function (req, token, refreshToken, profile, done) {
            logger.debug('Token: ' + token);
            logger.debug('RefreshToken: ' + refreshToken);
            logger.debug('Profile: ' + JSON.stringify(profile));
            // asynchronous
            process.nextTick(function () {

                //
                // // Check if the user is already logged in
                // // In this case we have to link the account to the existing user
                // if (req.user) {
                //     oAuthConnector.linkProfileToExistingAccount(strategyName, token, profile);
                // }

                oAuthConnector.login(strategyName, token, profile, function (err, tokenInfo) {
                    profile.token = token;

                    profile.intTokenInfo = tokenInfo;

                    done(err, false);
                });
            });

        }));
};