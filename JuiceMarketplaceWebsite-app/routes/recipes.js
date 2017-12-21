const express = require('express');
const router = express.Router();
const marketplaceCore = require('../adapter/marketplace_core_adapter');
const logger = require('../global/logger');
const helper = require('../services/helper_service');

const {Validator, ValidationError} = require('express-json-validator-middleware');
const validator = new Validator({allErrors: true});
const validate = validator.validate;
const validation_schema = require('../schema/recipe_schema');

/**
 * get all recipes
 */
router.get('/', validate({
    query: validation_schema.Recipe_Query,
    body: validation_schema.Empty
}), function (req, res, next) {

    const components = req.query['components'];
    const createdBy = req.query['createdBy'];
    const limit = req.query['limit'];
    const orderedBy = req.query['orderBy'];


    const params = {};

    if (components) {
        params['components'] = components;
    }

    if (createdBy) {
        params['ownerUUID'] = createdBy;
    }

    marketplaceCore.getAllRecipes(req.user.token, params, function (err, recipes) {
        if (err) {
            return next(err);
        }


        switch (orderedBy) {
            case 'alphASC':
                recipes.sort(function(a,b) {
                    const nameA = a.technologydataname.toUpperCase(); // ignore upper and lowercase
                    const nameB = b.technologydataname.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    // names are equal
                    return 0;
                });
                break;
            case 'alphDESC':
                recipes.sort(function(a,b) {
                    const nameA = a.technologydataname.toUpperCase(); // ignore upper and lowercase
                    const nameB = b.technologydataname.toUpperCase(); // ignore upper and lowercase
                    if (nameA > nameB) {
                        return -1;
                    }
                    if (nameA < nameB) {
                        return 1;
                    }

                    // names are equal
                    return 0;
                });
                break;
            case 'random':
                recipes = helper.shuffleArray(recipes);
                break;
            case 'ratingASC':
                logger.warn('[routes/recipes] ratingASC not implemented yet');
                break;
            case 'ratingDESC':
                logger.warn('[routes/recipes] ratingDESC not implemented yet');
                break;
            default:
                break;
        }

        if (limit && recipes.length > limit) {
            recipes = recipes.slice(0, limit-1)
        }

        res.send(recipes);
    });

});

router.get('/licenses/count', validate({
    query: validation_schema.License_Count_Query,
    body: validation_schema.Empty
}), function (req, res, next) {
    logger.warn('[routes/recipes] NOT IMPLEMENTED YET');
    res.send('NOT IMPLEMENTED YET');
});

router.get('/licenses/total', validate({
    query: validation_schema.License_Total_Query,
    body: validation_schema.Empty
}), function (req, res, next) {
    logger.warn('[routes/recipes] NOT IMPLEMENTED YET');
    res.send('NOT IMPLEMENTED YET');
});

router.get('/licenses/total/history', validate({
    query: validation_schema.License_History_Query,
    body: validation_schema.Empty
}), function (req, res, next) {
    logger.warn('[routes/recipes] NOT IMPLEMENTED YET');
    res.send('NOT IMPLEMENTED YET');
});

router.get('/:id', validate({
    query: validation_schema.Empty,
    body: validation_schema.Empty
}), function (req, res, next) {
    logger.warn('[routes/recipes] NOT IMPLEMENTED YET');
    res.send('NOT IMPLEMENTED YET');
});

router.get('/:id/licenses/count', validate({
    query: validation_schema.Recipe_License_Count_Query,
    body: validation_schema.Empty
}), function (req, res, next) {
    logger.warn('[routes/recipes] NOT IMPLEMENTED YET');
    res.send('NOT IMPLEMENTED YET');
});


router.get('/:id/licenses/count/history', validate({
    query: validation_schema.Recipe_License_History_Query,
    body: validation_schema.Empty
}), function (req, res, next) {
    logger.warn('[routes/recipes] NOT IMPLEMENTED YET');
    res.send('NOT IMPLEMENTED YET');
});

router.get('/:id/image', validate({
    query: validation_schema.Empty,
    body: validation_schema.Empty
}), function (req, res, next) {
    logger.warn('[routes/recipes] NOT IMPLEMENTED YET');
    res.send('NOT IMPLEMENTED YET');
});

router.put('/:id/image', validate({
    query: validation_schema.Empty
}), function (req, res, next) {
    logger.warn('[routes/recipes] NOT IMPLEMENTED YET');
    res.send('NOT IMPLEMENTED YET');
});


module.exports = router;