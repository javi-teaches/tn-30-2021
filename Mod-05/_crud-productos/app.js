const express = require('express');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

const app = express();
app.listen(3000, () => console.log('Server running on port 3000'));

app.use(express.static(path.resolve(__dirname, 'public')));  // Necesario para los archivos estáticos en el folder /public

// Setup para el req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

app.set('view engine', 'ejs');

// Route System
const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/products'); // Rutas /products

app.use('/', mainRouter);
app.use('/products', productsRouter);
