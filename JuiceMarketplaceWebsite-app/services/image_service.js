const self  = {};

const IMAGE_PATH = 'src/assets/images/drinks';

const fs = require('fs');
const path = require('path');
const logger  = require('../global/logger');

self.availableImages = [];

fs.readdir(IMAGE_PATH, function (err, files) {
    if (err) {
        logger.crit("[image_service] Could not list the directory.", err);
        return;
    }

    self.availableImages = files;
});

self.loadImage = function(fileName) {
    if (self.availableImages.indexOf(fileName) <= 0) {
        return null;
    }

    const filePath = path.join(IMAGE_PATH, fileName);

    return fs.readFileSync(filePath, 'utf-8');
};




module.exports  = self;