// IMPORT
const   express = require('express'),
        app = express(),
        port = process.env.PORT || 8080,
        mongoose = require('mongoose'),
        bodyparser = require('body-parser');


// APP CONFIG
mongoose.connect('mongodb+srv://tnam002:SbBOsCtaSEJ06wHr@basicdatabase.kn82l.mongodb.net/TaeHyunNam?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({ extended: true }));

// USER DEFINITION
const   userSchema = new mongoose.Schema({ name: String, minutes: Number }),
        User = mongoose.model('user', userSchema);

// ROUTES
app.get('/', (req, res) => res.render('index'));
app.get('/ideas', (req, res) => res.render('ideas'));
app.get('/mbti', (req, res) => res.render('mbti'));
app.get('/tracker', (req, res) => {
    User.findOne({ name: 'Tae' }, (err, data) => {
        if (err) { console.log(err); }
        res.render('tracker', { user: data });
    });
});
app.post('/tracker', (req, res) => {
    User.updateOne(
        {name: 'Tae'},
        { $inc: { minutes: Number(req.body.minutes) }},
        (err, data) => {
            if (err) { console.log(err); }
            res.redirect('/tracker'); 
        });
});

// LISTEN
app.listen(port, () => console.log('Our app is running on http://localhost:' + port));