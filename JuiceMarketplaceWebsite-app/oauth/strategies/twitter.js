/**
 * Created by beuttlerma on 01.06.17.
 */

var TwitterStrategy  = require('passport-twitter').Strategy;
var oAuthConfig = require('../../config/config_loader').OAUTH_PROVIDER;
var oAuthConnector = require('../../adapter/auth_service_adapter');
var logger = require('../../global/logger');
var strategyName = 'twitter';

module.exports = function (passport) {
    logger.debug('Configure twitter oauth');

    // =========================================================================
    // GOOGLE ==================================================================
    // =========================================================================
    passport.use(new TwitterStrategy({

            consumerKey: oAuthConfig.twitterAuth.consumerKey,
            consumerSecret: oAuthConfig.twitterAuth.consumerSecret,
            callbackURL: oAuthConfig.twitterAuth.callbackURL,
            passReqToCallback: true, // allows us to pass in the req from our route (lets us check if a user is logged in or not)
            includeEmail: true,


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

                oAuthConnector.login(strategyName, profile.id, token, function (err, tokenInfo) {
                    if (err) {
                        return done(err);
                    }


                    var id = profile.id;
                    if ( profile.emails && profile.emails[0]) {
                        id = profile.emails[0];
                    }
                    done(err, {
                        id: id,
                        token: tokenInfo
                    });
                });
            });

        }));
};