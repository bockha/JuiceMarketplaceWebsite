const startLimit = 2;

const self = {};


self.calculateRecipeLimit = function (activatedLicenses) {
    if (activatedLicenses === 0) {
        return startLimit;
    }
    return Math.floor(startLimit + Math.log2(activatedLicenses));
};

module.exports = self;