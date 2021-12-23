const express = require('express');

const app = express();

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));

// Setup del Template Engine
app.set('view engine', 'ejs');

// Configuración de archivos estáticos
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	return res.render('home');
});

// Requerimos el archivo de rutas products.js
const productRoutes = require('./routes/products');
app.use('/products', productRoutes);

// Requerimos el archivo de rutas users.js
const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);