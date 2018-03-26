const oAuthServer = require('../adapter/auth_service_adapter');

const self = {};


self.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.sendStatus(401);
};

self.isUserWithRole = function (role, req, res, next) {
    if (req.isAuthenticated()) {
        oAuthServer.getUserInfoForToken(req.user.token.accessToken, function (err, userInfo) {
            if (err) {
                return next(err);
            }

            if (userInfo.roles && userInfo.roles.indexOf(role) > -1) {
                return next();
            }


            res.sendStatus(401);
        });
    }
};

self.isAdmin = function (req, res, next) {
    self.isUserWithRole('Admin', req, res, next)
};


module.exports = self;