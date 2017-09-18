// load all the things we need
const fs = require('fs');
const path = require('path');
const logger = require('../global/logger');
const authServer = require('../adapter/auth_service_adapter');

const userStore = {}; //TODO: Maybe move this into a database

// Cleanup Session objects periodically
const cleanUpInterval = setInterval(function() {
    logger.info('[passport] Session cleanup');
    Object.keys(userStore).forEach(function(uuid) {
        try {
            // Delete all sessions where refresh token has expired.
            const session = userStore[uuid];
            if (session) {
                if (!session.token || !session.token.refreshTokenExpiresAt) {
                    logger.info('[passport] deleting invalid session object for user: ' + uuid);
                    delete userStore[uuid];

                    return;
                }

                if (new Date(session.token.refreshTokenExpiresAt) < new Date()) {
                    logger.info('[passport] refresh token expired. deleting session for user: ' + uuid);
                    delete userStore[uuid];
                }
            }
        }
        catch (err) {
            logger.warn(err);
        }
    });
}, 1000 * 60 * 60);

function configurePassportForStragiesInPath(dirPath, passport) {
    // Loop through all the files in the temp directory
    fs.readdir(dirPath, function (err, files) {
        if (err) {
            console.error("Could not list the directory.", err);
            process.exit(1);
        }

        files.forEach(function (file, index) {
            var filePath = path.join(dirPath, file);

            fs.stat(filePath, function (error, stat) {
                if (error) {
                    console.error("Error stating file.", error);
                    return;
                }

                if (stat.isFile()) {
                    if (filePath === __filename) {
                        return;
                    }

                    logger.info('Configure OAUTH Strategy: ' + file);
                    require(filePath)(passport);
                }

            });
        });
    });
}

module.exports = function (passport) {

    // =========================================================================
    // basic passport setup   ==================================================
    // =========================================================================

    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session
    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        logger.debug('Serialize User: ' + JSON.stringify(user));
        userStore[user.token.user] = user;

        done(null, user.token.user);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        logger.debug('Deserialize User: ' + JSON.stringify(id));
        var user = userStore[id];

        authServer.refreshTokenForUser(user, function (err, updatedUser) {
            if (err) {
                logger.warn('[passport] Error while refreshing access token');
                logger.warn(err);
                logger.info('[passport] Forcing log out user.');

                done(null, false);
            }
            else {
                done(err, updatedUser);
            }
        });
    });


    // =========================================================================
    // Configure strategies   ==================================================
    // =========================================================================

    configurePassportForStragiesInPath(__dirname + '/strategies', passport);
};
