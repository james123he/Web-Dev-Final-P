var path = require('path')
var express = require('express')
var exphbs  = require('express-handlebars');



var app = express()
var port = process.env.PORT || 3000


app.set('views', path.join(__dirname, 'views'));
app.use('/videos', express.static(path.join(__dirname, 'videos')));

app.use(express.static('public'))

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars')

const allVideos = require('./videos.json');
const recommendedVideos = require('./recommendedVideos.json')

app.get('/search', (req, res) => {
    const searchQuery = req.query.query ? req.query.query.toLowerCase() : '';
    const genreFilter = req.query.genre ? req.query.genre.toLowerCase() : '';
    const forKidsFilter = req.query.forKids

    let filteredVideos = allVideos;

    // Filter by search query if provided
    if (searchQuery) {
        filteredVideos = filteredVideos.filter(video => 
            video.title.toLowerCase().includes(searchQuery) ||
            video.description.toLowerCase().includes(searchQuery)
        );
    }

    // Filter by genre if selected
    if (genreFilter) {
        filteredVideos = filteredVideos.filter(video => video.genre === genreFilter);
    }

    // Filter by 'Kid friendly' if checked
    if (forKidsFilter) {
        filteredVideos = filteredVideos.filter(video => video.forKids === 'true');
    }

    // Render the search results with the applied filters
    res.render('search', { 
        query: req.query.query || '',
        searchResults: filteredVideos
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