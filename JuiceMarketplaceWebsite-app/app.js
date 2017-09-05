var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');

const config = require('./config/config_loader');

var app = express();
app.set('view engine', 'ejs');

//Configure Passport
require('./oauth/passport')(passport); // pass passport for configuration
app.use(session({
    secret: 'lbfifiou23bgofr2g18f12345121421pokdfsjga302lbfl2hbfdskb2o78gf324ougf232vksjhdvfakfviy3263972i', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// app.use('/console', isLoggedIn);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/reports', require('./routes/reports'));
app.use('/auth', require('./routes/auth')(passport));

app.use('/myreports', isLoggedIn, require('./routes/myreports'));
app.use('/users', isLoggedIn, require('./routes/users'));
app.use('/components', isLoggedIn, require('./routes/components'));
app.use('/console', isLoggedIn, require('./routes/console'));

app.get('/terms-of-service', function(req, res) {
    res.render('terms-of-service');
});

app.get('/privacy', function(req, res) {
    res.render('privacy');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/imprint', function(req, res) {
    res.render('imprint');
});
// app.use('/console', require('./routes/console'));

// app.use('/console', isLoggedIn, function(req, res) {
// app.use('/console', function(req, res) {
//     res.render('console/console', {query: req.query});
// });
// app.get('/console/configurator', function(req, res) {
//     res.render('console/configurator');
// });
// app.use('/console', isLoggedIn, function(req, res, next) {res.redirect('/console/console.html')});

app.use('/', function(req, res, next) {res.redirect('/landingpage/iuno.html')});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.redirectTo = req.originalUrl;
    req.session.save();

    res.redirect('/auth/iuno');
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    //Always logout user on failure
    req.logout();
    next(err, req, res)
});

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        try {
            err.message = JSON.parse(err.message)
        }
        catch (err) {

        }

        console.error(err.stack);
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
} else {
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        // Send error details to the client only when the status is 4XX
        if (err.status && err.status >= 400 && err.status < 500) {
            res.status = err.status;
            res.json({
                message: err.message,
                error: err
            });
        }
        res.sendStatus(500);
    });
}

module.exports = app;
