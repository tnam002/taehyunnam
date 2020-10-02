// APP LIBRARIES
const   express = require('express'),
        app = express(),
        bodyparser = require('body-parser'),
        seedDB = require('./seed'),
        mongoose = require('mongoose'),
        Campground = require('./models/campground'),
        Comment = require('./models/comment');

// APP SETUP
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
mongoose.connect('mongodb+srv://tnam002:SbBOsCtaSEJ06wHr@basicdatabase.kn82l.mongodb.net/BasicDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.static(__dirname + '/public'));
seedDB();

// LANDING PAGE
app.get('/', (req, res) => { res.render('landing'); });

// CAMPGROUND INDEX
app.get('/campgrounds', (req, res) => {
    Campground.find({}, (err, data) => {
        if (err) { console.log(err); }
        else { res.render('campgrounds/index', { data }); }
    });
});

// CAMPGROUND CREATE
app.post('/campgrounds', (req, res) => {
    Campground.create(req.body.campground, (err, data) => {
        if (err) { console.log(err); }
        else { res.redirect('/campgrounds'); }
    });
});

// CAMPGROUND NEW
app.get('/campgrounds/new', (req, res) => { res.render('campgrounds/new'); });


// CAMPGROUND SHOW
app.get('/campground/:id', (req, res) => {
    Campground.findById(req.params.id).populate('comments').exec((err, data) => {
        if (err) { console.log(err); }
        else {
            res.render('campgrounds/show', { campground: data });
        }
    });
});

// COMMENT NEW
app.get('/campground/:id/comment/new', (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if (err) { console.log(err); }
        else { res.render('comments/new', { campground }); }
    })
});

// COMMENT CREATE
app.post('/campground/:id/comment', (req, res) => {
    Comment.create(req.body.comment, (err, comment) => {
        if (err) { console.log(err); }
        else {
            Campground.findById(req.params.id, (err, campground) => {
                if (err) { console.log(err); }
                campground.comments.push(comment);
                campground.save();
                console.log('New Comment Added');
                res.redirect(`/campground/${req.params.id}`);
            });
        }
    });
});

app.listen(3000, () => console.log('YelpCamp Server started on PORT 3000...'));