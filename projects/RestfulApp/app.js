const bodyParser = require('body-parser');
var express = require('express'),
    app = express(),
    bodyparser = require('body-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override');

app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost:27017/restful', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

var blogSchema = new mongoose.Schema({ title: String, image: String, description: String, date: {type: Date, default: Date.now}});
var Blog = mongoose.model('blog', blogSchema);

app.get('/', (req, res) => res.redirect('/blog'));

// INDEX ROUTE
app.get('/blog', (req, res) => {
    Blog.find({}, (err, data) => {
        if (err) { console.log(err); }
        else { res.render('index', { blogs: data }); }
    })
});

// CREATE ROUTE
app.post('/blog', (req, res) => {
    Blog.create(req.body.blog, (err, data) => {
        if (err) { console.log(err); }
        else { console.log('CREATED SUCCESS: ' + data); res.redirect('/'); }
    });
})

// NEW ROUTE
app.get('/blog/new', (req, res) => { res.render('new'); });

// SHOW ROUTE
app.get('/blog/:id', (req, res) => {
    Blog.findById(req.params.id, (err, data) => {
        if (err) { console.log(err); }
        else { res.render('show', { blog: data }); }
    });
});

// EDIT ROUTE
app.get('/blog/:id/edit', (req, res) => {
    Blog.findById(req.params.id, (err, data) => {
        if (err) { console.log(err); }
        else { res.render('edit', { blog: data }); }
    })
});

// UPDATE ROUTE
app.put('/blog/:id', (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, data) => {
        if (err) { console.log(err); }
        else { res.redirect(`/blog/${req.params.id}`); }
    });
});

// DELETE ROUTE
app.delete('/blog/:id', (req, res) => {
    Blog.findByIdAndDelete(req.params.id, req.body.blog, (err, data) => {
        if (err) { console.log(err); }
        else { res.redirect('/blog'); }
    });
});

app.listen(3000, () => console.log('Server started on 3000...'));