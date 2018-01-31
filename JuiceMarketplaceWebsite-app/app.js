const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const queryParser = require('express-query-int');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('cookie-session');
const fs = require('fs');
const marked = require('marked');
const contentTypeValidation = require('./services/content_type_validation');
const uaParser = require('ua-parser');

const config = require('./config/config_loader');

const app = express();

app.use('/', contentTypeValidation);
app.use('*', function (req, res, next) {
    let r = uaParser.parse(req.headers['user-agent']);
    // console.log(r.ua.toString());        // -> "Safari 5.0.1" 
    // console.log(r.ua.toVersionString()); // -> "5.0.1" 
    // console.log(r.ua.family)             // -> "Safari" 
    // console.log(r.ua.major);             // -> "5" 
    // console.log(r.ua.minor);             // -> "0" 
    // console.log(r.ua.patch);             // -> "1" 
    
    // console.log(r.os.toString());        // -> "iOS 5.1" 
    // console.log(r.os.toVersionString()); // -> "5.1" 
    // console.log(r.os.family)             // -> "iOS" 
    // console.log(r.os.major);             // -> "5" 
    // console.log(r.os.minor);             // -> "1" 
    // console.log(r.os.patch);             // -> null 
    
    // console.log(r.device.family);        // -> "iPhone" 

    // IE <= 11 is not supported
    if (r.ua.family == 'IE' && r.ua.major <= 11) {
        res.sendFile(path.join(__dirname, 'browser_not_supported.html'));
    } else {
        return next();
    }
});

app.set('view engine', 'ejs');

//Configure Passport
require('./oauth/passport')(passport); // pass passport for configuration

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(queryParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api/reports', require('./routes/reports'));

// -- CONFIGURE PASSPORT SESSION --
app.use(session({
    secret: config.SESSION_SECRET
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


// -- PUBLIC CONTENT --
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/auth', require('./routes/auth')(passport));
app.use('/api/reports', require('./routes/reports'));
app.use('/coupon', require('./routes/coupon'));
app.use('/', express.static(path.join(__dirname, 'dist')));

// -- RESTRICTED CONTENT --
app.use('/api/users', isLoggedIn, require('./routes/users'));
app.use('/api/recipes', isLoggedIn, require('./routes/recipes'));
app.use('/api/components', isLoggedIn, require('./routes/components'));

app.all('*', function (req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {

    let responseData;

    if (err.name === 'JsonSchemaValidationError') {
        // Log the error however you please
        console.log(JSON.stringify(err.validationErrors));

        // Set a bad request http response status or whatever you want
        res.status(400);

        // Format the response body however you want
        responseData = {
            statusText: 'Bad Request',
            jsonSchemaValidation: true,
            validations: err.validationErrors  // All of your validation information
        };

        return res.json(responseData);
    }

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


// -- FUNCTIONS --

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.sendStatus(401);
}