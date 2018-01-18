/**
 * Created by beuttlerma on 10.07.17.
 */

const express = require('express');
const router = express.Router();
const marketplaceCore = require('../adapter/marketplace_core_adapter');
const logger = require('../global/logger');

const {Validator, ValidationError} = require('express-json-validator-middleware');
const validator = new Validator({allErrors: true});
const validate = validator.validate;
const validation_schema = require('../schema/components_schema');

router.get('/', validate({
    query: validation_schema.Empty,
    body: validation_schema.Empty
}), function (req, res, next) {
    const accessToken = req.user.token.accessToken;

    marketplaceCore.getAllComponents(accessToken, function (err, components) {

        if (err) {
            next(err);
            return;
        }

        res.json(components);
    });
});


router.post('/', validate({
    query: validation_schema.Empty,
    body: validation_schema.Components_Body
}), function (req, res, next) {
    logger.warn('[routes/components] NOT IMPLEMENTED YET');
    res.send('NOT IMPLEMENTED YET');
});


router.get('/:id', validate({
    query: validation_schema.Empty,
    body: validation_schema.Empty
}), function (req, res, next) {
    logger.warn('[routes/components] NOT IMPLEMENTED YET');
    res.send('NOT IMPLEMENTED YET');
});

module.exports = router;
