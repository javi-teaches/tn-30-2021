const path = require('path');

const productsList = [
	'Tv',
	'Compu',
	'Teléfono',
	'Heladera',
	'Zapatillas',
	'Cámara Web',
	'Taza eléctrica'
];

const controller = {
	products: (req, res) => {
		return res.render(
			'products', 
			{
				productsList: productsList,
				developer: 'Javier'
			}
		);
	},

	create: (req, res) => {
		return res.send('Crear un producto');
	}, 
	
	show: (req, res) => {
		return res.send('Estás viendo el producto con ID:' + req.params.id);
	}, 
}

module.exports = controller;