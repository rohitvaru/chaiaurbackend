import express from 'express';

const app = express();

/**
 * GET route handler for '/route' endpoint.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/route', (req, res) => {
    res.send('Hello World');
});

/**
 * GET route handler for '/rohit' endpoint.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/rohit', (req, res) => {
    res.send('Hello Rohit');
});

// server start on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});