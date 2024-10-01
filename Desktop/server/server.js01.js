const express = require('express');
const app = express();
const PORT = 3000;

//app.use(express.json()); // Middleware to parse JSON

// Define a simple endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
console.log('Starting server...');
