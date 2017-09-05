const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.redirect('myreports');
    // res.render('console/configurator', {
    //     query: req.query,
    // });
});

router.get('/configurator', function (req, res, next) {    
    res.render('console/configurator', {
        query: req.query,
    });
});

router.get('/myreports', function (req, res, next) {
    res.render('console/myreports', {
        query: req.query,
    });
});

router.get('/myrecipes', function (req, res, next) {
    res.render('console/myrecipes', {
        query: req.query,
    });
});

module.exports = router;
