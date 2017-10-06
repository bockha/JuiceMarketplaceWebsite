const express = require('express');
const router = express.Router();
const logger = require('../global/logger');
const captchaAdapter = require('../adapter/recaptcha_adapter');

router.post('/', function (req, res, next) {
    const captchaResponse = req.body['g-recaptcha-response'];

    captchaAdapter.verifyReCaptchaResponse(captchaResponse, function (err, success) {
        if (err || !success) {
            return res.sendStatus(400);
        }

        //TODO: Generate coupon and set correct id
        const id = '10y42g0r1o2brfobaowfbawf';


        res.redirect('/coupon/faucet?id=' + id);
    });
});

router.get('/:id/ios', function (req, res, next) {
    //TODO: Return iOS Wallet Entry

    res.send('Coming soon...');
});

router.get('/:id/pdf', function (req, res, next) {

    //TODO: Return PDF Coupon
    res.send('Coming soon...');
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
