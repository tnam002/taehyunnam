var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

var friends = ['Randy', 'Brandon', 'Michelle', 'Ciano', 'Jeffrey'];

app.get('/', (req, res) => { res.render('home'); });

// eval(require('locus'));

axios.get('https://jsonplaceholder.typicode.com/users/2')
  .then(response => console.log(response.data.address.geo.lat))
  .catch(error => console.log(error));

app.get('/friends', (req, res) => {
    res.render('friends', { friends });
    console.log(`${req.query.hello} was typed in the query`);
});

app.post('/addfriend', (req, res) => {
    friends.push(req.body.friendName);
    res.redirect('/friends');
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

app.listen(3000, () => console.log('*************** Server started at port 3000 ***************'));