

var self = require('./encryption_strategy/default');

try {
    self = require('./encryption_strategy/' + process.env.NODE_ENV);
}
catch (err) {

}

module.exports = self;