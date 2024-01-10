const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// In-memory storage for responses
const responses = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve CSS file
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css'));
});

app.get('/img.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'img.jpg'));
});

// API endpoint to store responses
app.post('/api/response', (req, res) => {
    const { name, response } = req.body;
    responses.push({ name, response });
    console.log(`Response received from ${name}: ${response}`);
    res.json({ success: true });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

