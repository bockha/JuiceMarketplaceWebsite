const express = require('express');
const router = express.Router({mergeParams: true});
const marketplaceCore = require('../adapter/marketplace_core_adapter');

const {Validator, ValidationError} = require('express-json-validator-middleware');
const validator = new Validator({allErrors: true});
const validate = validator.validate;
const validation_schema = require('../schema/vault_schema');

router.get('/balance', validate({
    query: validation_schema.Empty,
    body: validation_schema.Empty
}), function (req, res, next) {
    const token = req.user.token;
    marketplaceCore.getCumulatedVaultBalanceForUser(req.params['id'],token['accessToken'], function (err, income) {
        if (err) {
            return next(err);
        }
        res.send(income.toString());
    });
});

router.get('/wallets', validate({
    query: validation_schema.Empty,
    body: validation_schema.Empty
}), function (req, res, next) {
    const token = req.user.token;
    marketplaceCore.getVaultWalletsForUser(req.params['id'],token['accessToken'], function (err, wallets) {
        if (err) {
            return next(err);
        }
        res.send(wallets);
    });
});

router.post('/wallets/:walletId/payouts', validate({
    query: validation_schema.Empty,
    body: validation_schema.Payout_Body
}), function(req, res, next){
    const token = req.user.token;
    marketplaceCore.createVaultPayoutForUser(req.params['id'],req.params['walletId'],token['accessToken'],req.body,function(err, payout){
        if(err){
            return next(err);
        }
        res.send(payout);
    })
});


module.exports = router;