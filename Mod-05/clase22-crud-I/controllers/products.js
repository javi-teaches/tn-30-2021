const fs = require('fs');
const path = require('path');

// Ubicación del archivo JSON
const filePath = path.resolve(__dirname, '../data/products.json');

// Lectura del archivo JSON y parseado a array - IMPORTANTE - DB
const productsArray = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const controller = {
	browse: (req, res) => {
		const isSaved = req.query.saved;

		if (isSaved === 'true') {
			return res.render('products/browse', {
				productsList: productsArray,
				redirect: true
			});
		}

		return res.render('products/browse', {
			productsList: productsArray
		});
	},

	read: (req, res) => {
		const productId = req.params.id;
		res.send('detalles de un producto - ID:' + productId);
	},

	create: (req, res) => {
		res.render('products/create');
	},

	add: (req, res) => {
		// Inserto el nuevo producto al array de productos existen
		productsArray.push({
			pdtName: req.body.pdtName,
			pdtPrice: req.body.pdtPrice,
		});

		// Sobreescribo todo el archivo JSON con el nuevo producto
		fs.writeFileSync(filePath, JSON.stringify(productsArray, null, ' '));

		// Y luego la redirección
		res.redirect('/products?saved=true');
	},

	edit: (req, res) => {
		const productId = req.params.id;
		res.send('formulario edición de producto - ID:' + productId);
	},

	update: (req, res) => {
		const productId = req.params.id;
		res.send('vamos a actualizar el producto con ID: ' + productId);
	},

	delete: (req, res) => {
		const productId = req.params.id;
		res.send('vamos a borrar el producto con ID - ' + productId);
	},
}

module.exports = controller;