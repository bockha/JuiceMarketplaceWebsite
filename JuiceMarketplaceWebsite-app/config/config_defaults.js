/**
 * Created by beuttlerma on 18.04.17.
 */


var self = {};


// ---- CONFIGURATION EXPORT ----
self.LOG_LEVEL = 'debug';

self.HOST_SETTINGS = {
    MARKETPLACE_CORE: {
        PROTOCOL: 'HTTP',
        HOST: 'localhost',
        PORT: 3002
    },
    OAUTH_SERVER: {
        PROTOCOL: 'HTTP',
        HOST: 'localhost',
        PORT: 3005
    },
    OAUTH_SERVER_SECURE: {
        PROTOCOL: 'HTTP',
        HOST: 'localhost',
        PORT: 3006
    }
};

self.OAUTH_CREDENTIALS = {
    CLIENT_ID: '',
    CLIENT_SECRET: '',
    CALLBACK_URL: 'http://localhost:3004/auth/iuno/callback'
};

self.TECHNOLOGY_UUID = 'da17a8fc-a5b3-40a4-b6a5-276667db027a';


module.exports = self;