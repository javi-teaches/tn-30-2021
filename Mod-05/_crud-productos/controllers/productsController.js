const fs = require('fs');
const path = require('path');

// Ubicación del archivo JSON (nuestra DB de momento)
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

// Lectura y parseado (en array) del archivo JSON
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	// Root - Show all products
	index: (req, res) => {
		return res.render('products', {
			productsList: products // enviamos el array de productos obtenido, a la vista
		});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Obtenemos el ID que vino como parámetro en la ruta (los parámetros viene en formato String)
		const id = Number(req.params.id); // Number() nos dá el el valor en formato Number
		// Buscamos al producto dentro del array que corresponda con ese id
		const product = products.find(oneProduct => oneProduct.id === id);
		return res.render('product-detail', {
			theProduct: product // enviamos el producto encontrado según el ID
		});
	},

	// Create - Form to create
	create: (req, res) => {
		return res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Esta función se encarga de generar el ID para un nuevo producto
		const generateID = () => {
			// 1. Obtenemos el último producto almacenado en la DB
			const lastProduct =  products[products.length - 1];
			// 2. Obtenemos el ID de ese último producto
			const lastID = lastProduct.id;
			// 3. Retornamos ese último ID incrementado en 1
			return lastID + 1;
		}

		// En el array de productos (DB) insertamos el nuevo producto con los datos que vinieron en req.body por POST
		products.push({
			id: generateID(), // Así generamos el ID de manera dinámica
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: 'default-image.png', // como aún no sabemos subir archivos, dejamos para todos los productos nuevos esta imagen default
		})

		// Sobreescribimos de nuevo el archivo JSON
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

		// finalmente redireccionamos a /products
		return res.redirect('/products'); 
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Obtenemos el ID que vino como parámetro en la ruta (los parámetros viene en formato String)
		const id = Number(req.params.id); // Number() nos dá el el valor en formato Number
		// Buscamos al producto dentro del array que corresponda con ese id
		const product = products.find(oneProduct => oneProduct.id === id);
		return res.render('product-edit-form', { 
			theProduct: product 
		});
	},
	// Update - Method to update
	update: (req, res) => {
		// Obtenemos el ID que vino como parámetro en la ruta (los parámetros viene en formato String)
		const id = Number(req.params.id); // Number() nos dá el el valor en formato Number
		
		// Acá nos interesa retornar TODOS los productos pero editando el que necesitamos, por eso hacemos un map
		const productsArrayEdited = products.map(oneProduct => {
			if (oneProduct.id === id) { // si los ID's coinciden, editamos ese producto (objeto)
				return {
					...oneProduct, // El spread operator nos permite mantener las propiedades del producto que no queremos cambiar (ID & IMAGE)
					name: req.body.name, // lo mismo que hicimos cuando almacenamos un producto nuevo
					price: req.body.price,
					discount: req.body.discount,
					category: req.body.category,
					description: req.body.description,
				}
			}
			return oneProduct; // si los ID's no coinciden retornamos ese producto tal cual está almacenado
		});

		// Sobreescribimos de nuevo el archivo JSON
		fs.writeFileSync(productsFilePath, JSON.stringify(productsArrayEdited, null, ' '));
		
		// finalmente redireccionamos a los productos
		return res.redirect('/products'); 
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Obtenemos el ID que vino como parámetro en la ruta (los parámetros viene en formato String)
		const id = Number(req.params.id); // Number() nos dá el el valor en formato Number

		// Acá nos interesa retornar TODOS los productos MENOS el que vamos a borrar, por eso hacemos un filter
		const productsArrayFiltered = products.filter(oneProduct => oneProduct.id !== id);

		// Sobreescribimos de nuevo el archivo JSON
		fs.writeFileSync(productsFilePath, JSON.stringify(productsArrayFiltered, null, ' '));

		// finalmente redireccionamos a los productos
		return res.redirect('/products'); 
	}
};

module.exports = controller;