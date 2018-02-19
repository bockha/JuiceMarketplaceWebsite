const CONFIG = require('../config/config_loader');

const self = {};


self.calculateRecipeLimit = function (activatedLicenses) {
    if (activatedLicenses === 0) {
        return CONFIG.RECIPE_LIMIT_PER_USER;
    }
    console.log(Math.floor(CONFIG.RECIPE_LIMIT_PER_USER + Math.log2(activatedLicenses)));
    return Math.floor(CONFIG.RECIPE_LIMIT_PER_USER + Math.log2(activatedLicenses));
};

module.exports = self;