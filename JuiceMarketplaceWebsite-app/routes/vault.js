const express = require('express');
const router = express.Router({mergeParams: true});
const marketplaceCore = require('../adapter/marketplace_core_adapter');

router.get('/balance', function (req, res, next) {
    var token = req.user.token;
    marketplaceCore.getCumulatedVaultBalanceForUser(req.params['id'],token['accessToken'], function (err, income) {
        if (err) {
            return next(err);
        }
        res.send(income.toString());
    });
});

router.get('/wallets', function (req, res, next) {
    var token = req.user.token;
    marketplaceCore.getVaultWalletsForUser(req.params['id'],token['accessToken'], function (err, wallets) {
        if (err) {
            return next(err);
        }
        res.send(wallets);
    });
});

router.post('/wallets/:walletId/payouts', function(req, res, next){
    var token = req.user.token;
    marketplaceCore.createVaultPayoutForUser(req.params['id'],req.params['walletId'],token['accessToken'],req.body,function(err, payout){
        if(err){
            return next(err);
        }
        res.send(payout);
    })
});


module.exports = router;