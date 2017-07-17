/**
 * Created by beuttlerma on 18.04.17.
 */


var self = {};


// ---- CONFIGURATION EXPORT ----
self.LOG_LEVEL = 'debug';

self.HOST_SETTINGS = {
    MARKETPLACE_CORE: {
        HOST: 'localhost',
        PORT: 3002
    },
    OAUTH_SERVER: {
        HOST: 'localhost',
        PORT: 3006
    }
};

self.OAUTH_PROVIDER = {
    facebookAuth: {
        'clientID': '', // your App ID
        'clientSecret': '', // your App Secret
        'callbackURL': 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields': ['id', 'name', 'photos']
    },

    twitterAuth: {
        'consumerKey': '',
        'consumerSecret': '',
        'callbackURL': 'http://127.0.0.1:3004/auth/twitter/callback'
    },

    googleAuth: {
        'clientID': '',
        'clientSecret': '',
        'callbackURL': 'http://127.0.0.1:3004/auth/google/callback'
    }
};

self.OAUTH_CREDENTIALS = {
    CLIENT_ID: '',
    CLIENT_SECRET: ''
};


module.exports = self;