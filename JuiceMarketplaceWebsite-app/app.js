var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('cookie-session');
var fs = require('fs');
var marked = require('marked');

const config = require('./config/config_loader');

var app = express();

// Accept JSON and URL ENCODED only
app.use('/', function (req, res, next) {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
        if (!(req.is('application/json') || req.is('application/x-www-form-urlencoded'))) {
            return res.status(400).send('content-type not accepted');
        }
    }

    next();
});


app.set('view engine', 'ejs');

//Configure Passport
require('./oauth/passport')(passport); // pass passport for configuration

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// -- PUBLIC CONTENT --
app.use(express.static(path.join(__dirname, 'public')));
app.use('/reports', require('./routes/reports'));

app.use(session({
    secret: config.SESSION_SECRET
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use('/auth', require('./routes/auth')(passport));

app.use('/coupon', require('./routes/coupon'));

// -- RESTRICTED CONTENT --

app.use('/users', isLoggedIn, require('./routes/users'));
app.use('/components', isLoggedIn, require('./routes/components'));
app.use('/console', isLoggedIn, require('./routes/console'));

function renderLegalPage(res, filename) {
    var path = __dirname + '/resources/' + filename;
    var file = fs.readFileSync(path, 'utf8');
    var content = marked(file.toString());
    res.render('legal', {
        content: content,
    });
}

app.get('/terms-of-service', function(req, res) {
    renderLegalPage(res, 'terms-of-service.md');
});

app.get('/privacy', function(req, res) {
    renderLegalPage(res, 'privacy.md');
});

app.get('/contact', function(req, res) {
    renderLegalPage(res, 'contact.md');
});

app.get('/imprint', function(req, res) {
    renderLegalPage(res, 'imprint.md');
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
    res.cookie('redirectTo', req.originalUrl);

    res.redirect('/auth/iuno');
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') !== 'development') {
    app.use(function(err, req, res, next) {
        //Always logout user on failure
        req.logout();
        next(err, req, res)
    });
}

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
            res.status(err.status);
            res.json({
                message: err.message,
                error: err
            });
        }
        else {
            res.status(500);
            res.send('Something broke!');
        }
    });
}

module.exports = app;
