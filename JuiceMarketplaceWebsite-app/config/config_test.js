/**
 * Created by beuttlerma on 18.04.17.
 */


var self = {};


// ---- CONFIGURATION EXPORT ----
self.LOG_LEVEL = 'debug';

self.HOST_SETTINGS = {
    MARKETPLACE_CORE: {
        PROTOCOL: 'HTTP',
        HOST: 'test-tdm.fritz.box',
        PORT: 3002
    },
    OAUTH_SERVER: {
        PROTOCOL: 'HTTP',
        HOST: 'test-tdm.fritz.box',
        PORT: 3005
    },
    OAUTH_SERVER_SECURE: {
        PROTOCOL: 'HTTP',
        HOST: 'test-tdm.fritz.box',
        PORT: 3006
    }
};

self.OAUTH_CREDENTIALS = {
    CLIENT_ID: 'adb4c297-45bd-437e-ac90-9179eea41744',
    CLIENT_SECRET: 'IsSecret',
    CALLBACK_URL: 'http://localhost:3004/auth/iuno/callback'
};


module.exports = self;