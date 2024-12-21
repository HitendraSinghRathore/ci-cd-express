const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the frontend
app.use('/', express.static(path.join(__dirname, '../frontend')));

// API endpoint that returns a simple message
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// API endpoint for status check
app.get('/status', (req, res) => {
    res.json({ status: 'OK' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});