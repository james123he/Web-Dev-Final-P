var path = require('path')
var express = require('express')
var exphbs  = require('express-handlebars');



var app = express()
var port = process.env.PORT || 3000


app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'))

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars')

const allVideos = require('./videos.json');
const recommendedVideos = require('./recommendedVideos.json')

app.get('/search/:query', (req, res) => {
    const query = req.params.query.toLowerCase()
    const searchResults = allVideos.filter(video => video.title.toLowerCase().includes(query))
    res.render('search', { 
        query: req.params.query, 
        searchResults
    });
});

app.get('/video/:id', (req, res) => {
    const videoId = req.params.id;
    const video = allVideos.find(v => v.id == videoId);

    if (!video) {
        return res.status(404).send('Video not found');
    }
    
    res.render('video-player', { video });
});

app.get('/', (req, res) => {
    res.render('home', { recommendedVideos });
});


app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});