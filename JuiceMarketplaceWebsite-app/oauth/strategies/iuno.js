/**
 * Created by beuttlerma on 01.06.17.
 */

const OAuthStrategy = require('passport-oauth2');
const oAuthConnector = require('../../adapter/auth_service_adapter');
const logger = require('../../global/logger');
const strategyName = 'iuno';
const CONFIG = require('../../config/config_loader');

String.prototype.format = function () {
    var args = [].slice.call(arguments);
    return this.replace(/(\{\d+\})/g, function (a) {
        return args[+(a.substr(1, a.length - 2)) || 0];
    });
};

module.exports = function (passport) {
    logger.debug('Configure iuno auth');

    const authServerUrl = '{0}://{1}:{2}'.format(
        CONFIG.HOST_SETTINGS.OAUTH_SERVER.PROTOCOL,
        CONFIG.HOST_SETTINGS.OAUTH_SERVER.HOST,
        CONFIG.HOST_SETTINGS.OAUTH_SERVER.PORT);

    const authServerUrl_token = '{0}://{1}:{2}'.format(
        CONFIG.HOST_SETTINGS.OAUTH_SERVER_SECURE.PROTOCOL,
        CONFIG.HOST_SETTINGS.OAUTH_SERVER_SECURE.HOST,
        CONFIG.HOST_SETTINGS.OAUTH_SERVER_SECURE.PORT);

    passport.use('iuno', new OAuthStrategy({
            authorizationURL: authServerUrl + '/oauth/authorise',
            tokenURL: authServerUrl_token + '/oauth/token',
            clientID: CONFIG.OAUTH_CREDENTIALS.CLIENT_ID,
            clientSecret: CONFIG.OAUTH_CREDENTIALS.CLIENT_SECRET,
            callbackURL: CONFIG.OAUTH_CREDENTIALS.CALLBACK_URL,
            passReqToCallback: true
        },
        function (req, token, refreshToken, profile, done) {
            oAuthConnector.getUserInfoForToken(token.accessToken, function(err, userInfo) {
                if (err) {
                    return done(err);
                }

                done(null, {
                    id: userInfo.useremail,
                    token: token
                });
            });

        }
    ));

};