var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/love/:animal', (req, res) => {
    var animal = req.params.animal.toLowerCase();
    res.render('love', { animal: animal });
});

app.get('/posts', (req, res) => {
    var posts = [
        { post: 'This cat is so funny haha', author: 'Colt' },
        { post: 'Catan is the best game', author: 'Brandon' },
        { post: 'What is the deal with this website', author: 'Tae' },
        { post: "I'm having trouble with motivation", author: 'Michelle' }
    ];
    res.render('posts', { posts: posts });
});

app.get('*', (req, res) => {
    res.send('The page was not found, but you can find yourself.');
})

app.listen(3000);