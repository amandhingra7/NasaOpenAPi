import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
const NASA_API_KEY = process.env.NASA_API_KEY;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the NASA Open API Backend!");
});



// APOD endpoint
app.get('/apod', async (req, res) => {
    try {
        const response = await  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch APOD data' });
    }
});

// Mars Rover Photos endpoint
app.get('/mars-rover-photos', async (req, res) => {
    console.log('Request received for Mars Rover photos');
    console.log('Query parameters:', req.query);

    try {
        const { rover, camera, page, sol, earth_date } = req.query;

        // Validate required parameters
        if (!rover || !camera) {
            return res.status(400).json({ error: 'Missing required query parameters: rover, camera' });
        }

        // Build the NASA API URL
        let apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?camera=${camera}&api_key=${NASA_API_KEY}`;
        if (sol) {
            apiUrl += `&sol=${sol}`;
        } else if (earth_date) {
            apiUrl += `&earth_date=${earth_date}`;
        } else {
            return res.status(400).json({ error: 'Missing required query parameter: sol or earth_date' });
        }

        if (page) {
            apiUrl += `&page=${page}`;
        }

        console.log('NASA API URL:', apiUrl);
        console.log('NASA API Key:', NASA_API_KEY);

        // Fetch data from NASA API
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        console.error('NASA API Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to fetch Mars Rover photos' });
    }
});


app.get('/rover-manifest', async (req, res) => {
    console.log('Request received for Rover Manifest');
    console.log('Query parameters:', req.query);

    try {
        const { rover } = req.query;

        // Validate required parameters
        if (!rover) {
            return res.status(400).json({ error: 'Missing required query parameter: rover' });
        }

        // Build the NASA API URL
        const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${NASA_API_KEY}`;
        console.log('NASA API URL:', apiUrl);

        // Fetch data from NASA API
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        console.error('NASA API Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to fetch Rover Manifest' });
    }
});

export default app;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});