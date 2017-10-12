

var self = {};

try {
    self = require('./encryption_strategy/' + process.env.NODE_ENV);
}
catch (err) {
    self = require('./encryption_strategy/default');
}

module.exports = self;