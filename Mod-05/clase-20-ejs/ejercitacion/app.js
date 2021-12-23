const express = require('express');

const app = express();

app.listen(3000, (req, res) => console.log('Server running in 3000 port'));

// Setup public folder
app.use( express.static('public') );

// EJS Setup 
app.set('view engine', 'ejs');

// Setup main router
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);