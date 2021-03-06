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
    OAUTH_SERVER_EXTERNAL: {
        PROTOCOL: 'HTTP',
        HOST: 'localhost',
        PORT: 3005
    },
    OAUTH_SERVER_INTERNAL: {
        PROTOCOL: 'HTTP',
        HOST: 'localhost',
        PORT: 3006
    },
    COUPON_SERVER: {
        PROTOCOL: 'HTTP',
        HOST: 'localhost',
        PORT: 3010
    }
};

self.OAUTH_CREDENTIALS = {
    CLIENT_ID: '',
    CLIENT_SECRET: '',
    CALLBACK_URL: 'http://localhost:3004/auth/iuno/callback'
};

self.TECHNOLOGY_UUID = 'da17a8fc-a5b3-40a4-b6a5-276667db027a';

self.PUBLIC_USER = {
    username: 'public@iuno.com',
    password: 'IsSecret'
};

self.PUBLIC_KEY_FILE_FOR_ENCRYPTION = 'resources/public_key_encryption.pem';

self.RECIPE_LIMIT_PER_USER = 2;

self.SESSION_SECRET = 'lbfifiou23bgofr2g18f12345121421pokdfsjga302lbfl2hbfdskb2o78gf324ougf232vksjhdvfakfviy3263972i';

self.G_RE_CAPTCHA_SECRET = '';

module.exports = self;