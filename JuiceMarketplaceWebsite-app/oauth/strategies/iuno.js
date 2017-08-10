/**
 * Created by beuttlerma on 01.06.17.
 */

var LocalStrategy = require('passport-local').Strategy;
var oAuthConnector = require('../../adapter/auth_service_adapter');
var logger = require('../../global/logger');
var strategyName = 'iuno';


module.exports = function (passport) {
    logger.debug('Configure user/pwd auth');

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        },
        function (req, email, password, done) {
            if (email) {
                email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching
            }

            // asynchronous
            process.nextTick(function () {
                oAuthConnector.login(strategyName, email, password, function (err, tokenInfo) {
                    if (err) {
                        logger.warn(err);
                    }

                    if (!tokenInfo) {
                        return done(null, false, {message: 'login failed: wrong user or password'});
                    }

                    done(err, {
                        id: email,
                        token: tokenInfo
                    });
                });
            });

        }));

    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        },
        function (req, email, password, done) {
            if (email) {
                email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching
            }

            // asynchronous
            process.nextTick(function () {
                oAuthConnector.signUp(
                    req.body.first_name,
                    req.body.last_name,
                    email,
                    password,
                    function (err, userId) {
                        if (err) {
                            return done(err);
                        }

                        if (!userId) {
                            return done(null, false, {message: 'Registration failed. Username maybe already used.'});
                        }

                        oAuthConnector.login(strategyName, email, password, function (err, tokenInfo) {
                            if (err) {
                                return done(err);
                            }

                            if (!tokenInfo) {
                                return done(null, false, {message: 'login failed: wrong user or password'});
                            }

                            done(err, {
                                id: email,
                                token: tokenInfo
                            });
                        });
                    });
            });

        }));
};