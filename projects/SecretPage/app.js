// importing all libraries and model
const   express = require('express'),
        app = express(),
        mongoose = require('mongoose'),
        passport = require('passport'),
        bodyParser = require('body-parser'),
        User = require('./models/user'),
        LocalStrategy = require('passport-local'),
        passportLocalMongoose = require('passport-local-mongoose');

// connecting to mongoDB atlas database
mongoose.connect('mongodb+srv://tnam002:SbBOsCtaSEJ06wHr@basicdatabase.kn82l.mongodb.net/secret_app?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// express uses ejs library for page rendering
app.set('view engine', 'ejs');

// express can take data from req.body
app.use(bodyParser.urlencoded({ extended: false }));

// ???
app.use(require('express-session')({
    secret: "I don't like domino's pizaa anymore.",
    resave: false,
    saveUninitialized: false
}));

// ???
app.use(passport.initialize());

// ???
app.use(passport.session());

// passport uses authenticate function from passport-local-mongoose for local login
passport.use(new LocalStrategy(User.authenticate()));

// ???
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// home page route
app.get('/', (req, res) => { res.render('home'); });

// secret page route, isLoggedIn checks authentication for session before rendering
app.get('/secret', isLoggedIn, (req, res) => { res.render('secret'); });

// register form route
app.get('/register', (req, res) => { res.render('register'); });

// register to database logic
app.post('/register', (req, res) => {
    User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
        if (err) { console.log(err); return res.render('register'); }
        else { passport.authenticate('local')(req, res, () => { res.redirect('/secret'); }); }
    });
});

// login form route
app.get('/login', (req, res) => { res.render('login'); });

// login using database logic
app.post('/login', passport.authenticate('local', { successRedirect: '/secret',failureRedirect: '/login' }), () => {});

// logout logic
app.get('/logout', (req, res) => { req.logout(); res.redirect('/'); });

// middleware for the secret page
function isLoggedIn(req, res, next) {
    // if user is authenticated, run the next function
    if (req.isAuthenticated()) { return next(); }
    // if use is NOT authenticated, redirect to homepage
    res.redirect('/login');
}

app.listen(3000);