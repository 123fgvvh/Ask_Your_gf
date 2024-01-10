const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// In-memory storage for responses
const responses = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (your HTML, CSS, JS)
app.use(express.static('public'));

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
