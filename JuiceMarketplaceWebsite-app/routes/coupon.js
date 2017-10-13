const express = require('express');
const router = express.Router();
const logger = require('../global/logger');
const captchaAdapter = require('../adapter/recaptcha_adapter');
const couponAdapter = require('../adapter/couponserver_adapter');
router.post('/', function (req, res, next) {
    const captchaResponse = req.body['g-recaptcha-response'];

    captchaAdapter.verifyReCaptchaResponse(captchaResponse, function (err, success) {
        if (err || !success) {
            return res.sendStatus(400);
        }


        couponAdapter.createCoupon("",function (err,id) {
            if(err || !id){
                res.sendStatus(500);
            }else{
                res.redirect('/coupon/faucet?id=' + id);
            }
        });


    });
});

router.get('/:id/ios', function (req, res, next) {

    couponAdapter.getIosCoupon(req.params['id'],res)

    // res.send('Coming soon...');
});

router.get('/:id/pdf', function (req, res, next) {
    couponAdapter.getPdfCoupon(req.params['id'],res)
    // res.send('Coming soon...');
});

router.get('/faucet', function (req, res, next) {
    if (req.query['id']) {
        res.render('coupon/download', {
            request: req,
            response: res,
            id: req.query['id']
        });
    }
    else {
        res.render('coupon/faucet', {
            request: req,
            response: res
        });
    }


});
module.exports = router;
