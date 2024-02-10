const express = require('express');

const app = express();

app.get('/a', (req, res) => {
    res.end('fn');
} )

module.exports = app;