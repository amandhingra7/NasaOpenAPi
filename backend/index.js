import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();  // Moved this above app.use(cors())

const PORT = process.env.PORT || 5000;
const NASA_API_KEY = process.env.NASA_API_KEY;

// Use CORS properly
app.use(cors({
  origin: "https://nasa-open-api-steel.vercel.app",  // Allow frontend to access backend
  methods: "GET,POST",
  credentials: true
}));

// Test route
app.get("/", (req, res) => {
    res.send("Welcome to the NASA Open API Backend!");
});

// APOD endpoint
app.get('/apod', async (req, res) => {
    try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
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

        if (!rover || !camera) {
            return res.status(400).json({ error: 'Missing required query parameters: rover, camera' });
        }

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

        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        console.error('NASA API Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to fetch Mars Rover photos' });
    }
});

// Rover Manifest endpoint
app.get('/rover-manifest', async (req, res) => {
    console.log('Request received for Rover Manifest');
    console.log('Query parameters:', req.query);

    try {
        const { rover } = req.query;

        if (!rover) {
            return res.status(400).json({ error: 'Missing required query parameter: rover' });
        }

        const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${NASA_API_KEY}`;
        console.log('NASA API URL:', apiUrl);

        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        console.error('NASA API Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to fetch Rover Manifest' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
