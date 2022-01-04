const express = require('express');
const path = require('path');

const app = express();

// Setup static files
app.use( express.static(path.resolve(__dirname, 'public')) );

// Server running
app.listen(3000, () => {
	console.log('Server running on port 3000');
})

// Setup template engine
app.set('view engine', 'ejs');

// Main routes
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);