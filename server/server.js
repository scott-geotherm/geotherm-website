const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/api/hubspot/me', async (req, res) => {
    try {
        const response = await fetch('https://api.hubapi.com/integrations/v1/me', {
            headers: {
                "Authorization": `Bearer ${process.env.VITE_HUBSPOT_API_KEY}`
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Failed to fetch data from HubSpot:', error);
        res.status(500).json({ error: 'Failed to fetch data from HubSpot' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 