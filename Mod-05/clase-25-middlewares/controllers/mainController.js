const fs = require('fs');
const path = require('path');

// Ubicación del archivo JSON (nuestra DB de momento)
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

// Lectura y parseado (en array) del archivo JSON
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	index: (req, res) => {
		return res.render('index', {
			productsList: products // enviamos el array de productos obtenido, a la vista
		});
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
