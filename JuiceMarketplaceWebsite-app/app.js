const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('cookie-session');
const fs = require('fs');
const marked = require('marked');
const contentTypeValidation = require('./services/content_type_validation');

const config = require('./config/config_loader');

const app = express();

app.use('/', contentTypeValidation);

app.set('view engine', 'ejs');

//Configure Passport
require('./oauth/passport')(passport); // pass passport for configuration

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// -- CONFIGURE PASSPORT SESSION --
app.use(session({
    secret: config.SESSION_SECRET
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


// -- PUBLIC CONTENT --
app.use(express.static(path.join(__dirname, 'public')));

app.use('/reports', require('./routes/reports'));
app.use('/auth', require('./routes/auth')(passport));
app.use('/coupon', require('./routes/coupon'));
app.use('/', express.static(path.join(__dirname, 'dist')));

// -- RESTRICTED CONTENT --
app.use('/users', isLoggedIn, require('./routes/users'));
app.use('/components', isLoggedIn, require('./routes/components'));

app.get('/console/*', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/terms-of-service', function (req, res) {
    renderLegalPage(res, 'terms-of-service.md');
});

app.get('/privacy', function (req, res) {
    renderLegalPage(res, 'privacy.md');
});

app.get('/contact', function (req, res) {
    renderLegalPage(res, 'contact.md');
});

app.get('/imprint', function (req, res) {
    renderLegalPage(res, 'imprint.md');
});

app.use('/', function (req, res, next) {
    express.static(path.join(__dirname, 'dist'))
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') !== 'development') {
    app.use(function (err, req, res, next) {
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


// -- FUNCTIONS --

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.sendStatus(401);
}

function renderLegalPage(res, filename) {
    const path = __dirname + '/resources/' + filename;
    const file = fs.readFileSync(path, 'utf8');
    const content = marked(file.toString());
    res.render('legal', {
        content: content
    });
}