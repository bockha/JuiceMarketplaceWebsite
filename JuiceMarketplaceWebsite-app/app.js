var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');

var app = express();


//Configure Passport
require('./oauth/passport')(passport); // pass passport for configuration
app.use(session({
    secret: 'lbfifiou23bgofr2g18fbo2lbfl2hbfdskb2o78gf324ougf232vksjhdvfakfviy3263972i', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/console', isLoggedIn);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/reports', require('./routes/reports'));
app.use('/auth', require('./routes/auth')(passport));
app.use('/users', isLoggedIn, require('./routes/users'));
app.use('/components', isLoggedIn, require('./routes/components'));

app.use('/', function(req, res, next) {res.redirect('/console/console.html')});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/login.html');
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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
        res.status(500).send('Something broke!');
    });
}

module.exports = app;
