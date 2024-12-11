var path = require('path')
var express = require('express')
var exphbs  = require('express-handlebars');
const fs = require('fs').promises;

var app = express()
var port = process.env.PORT || 3000

// Helper function to read video data
async function getVideoData() {
    try {
        const allVideosData = await fs.readFile('./videos.json', 'utf8');
        const recommendedVideosData = await fs.readFile('./recommendedVideos.json', 'utf8');
        return {
            allVideos: JSON.parse(allVideosData),
            recommendedVideos: JSON.parse(recommendedVideosData)
        };
    } catch (err) {
        console.error('Error reading video data:', err);
        throw err;
    }
}

app.set('views', path.join(__dirname, 'views'));
app.use('/videos', express.static(path.join(__dirname, 'videos')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars')

app.get('/search', async (req, res) => {
    try {
        const { allVideos } = await getVideoData();
        
        // Check if we have any search parameters at all
        const hasSearchParams = req.query.query !== undefined || 
                              req.query.genre || 
                              req.query.forKids;

        // If no search parameters, redirect to home page
        if (!hasSearchParams) {
            return res.redirect('/');
        }

        const searchQuery = req.query.query ? req.query.query.toLowerCase().trim() : '';
        const genreFilter = req.query.genre ? req.query.genre.toLowerCase() : '';
        const forKidsFilter = req.query.forKids;

        let filteredVideos = allVideos;

        // Only apply search query filter if there's actually a search term
        if (searchQuery !== '') {
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
    } catch (err) {
        console.error('Error in search:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/api/upload', async (req, res) => {
    try {
        // Read current video data
        const { allVideos, recommendedVideos } = await getVideoData();
        
        // Create new video object
        const newVideo = {
            id: (Math.max(...allVideos.map(v => parseInt(v.id))) + 1).toString(),
            title: req.body.title,
            description: req.body.description,
            thumbnail: req.body.thumbnail || "/images/default-thumbnail.jpg",
            url: req.body.url,
            genre: req.body.genre || "",
            forKids: req.body.forKids ? "true" : "false"
        };

        // Add to videos arrays
        allVideos.push(newVideo);
        recommendedVideos.push(newVideo);

        // Write back to both files
        await Promise.all([
            fs.writeFile('./videos.json', JSON.stringify(allVideos, null, 2)),
            fs.writeFile('./recommendedVideos.json', JSON.stringify(recommendedVideos, null, 2))
        ]);

        res.status(201).json(newVideo);
    } catch (err) {
        console.error('Error uploading video:', err);
        res.status(500).json({ error: 'Failed to upload video' });
    }
});

app.get('/video/:id', async (req, res) => {
    try {
        const { allVideos } = await getVideoData();
        const videoId = req.params.id;
        const video = allVideos.find(v => v.id == videoId);

        if (!video) {
            return res.status(404).send('Video not found');
        }
        
        res.render('video-player', { video });
    } catch (err) {
        console.error('Error getting video:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/', async (req, res) => {
    try {
        const { recommendedVideos, allVideos } = await getVideoData();
        res.render('home', { recommendedVideos, allVideos });
    } catch (err) {
        console.error('Error in home route:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});