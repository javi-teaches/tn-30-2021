const path = require("path");
const fs = require("fs");

// Path al JSON DB
const productsJSONPath = path.resolve(__dirname, "../data/products.json");
// Contenido de la DB
const productsDB = JSON.parse(fs.readFileSync(productsJSONPath,"utf-8"));

const controller = {
	index: (req, res) => {
		return res.render("products-list", {productsDB});
	},
	detail: (req, res) => {
		const productId = Number(req.params.id);

		const theProduct = productsDB.find(thisIsTheProduct => thisIsTheProduct.id === productId);

		return res.render('products-detail', {
			theProduct,
		});
	},
	create: (req, res) => {
		return res.render('products-create');
	},
	store: (req,res)=>{
		// Función para generar el ID
		const generateID = () => {
			// 1. Obtenemos el último producto almacenado en la DB
			const lastProduct = productsDB[productsDB.length - 1];
			// 2. Obtenemos el ID de ese último producto
			const lastID = lastProduct.id;
			// 3. Retornamos ese último ID incrementado en 1
			return lastID + 1;
		}

		// Inserto el nuevo producto en la DB
		// productsDB.push({
		// 	name: req.body.name,
		// 	description: req.body.description,
		// 	price: req.body.price,
		// 	category: req.body.category,
		// })
		productsDB.push({
			id: generateID(),
			...req.body,
			image: req.file.filename
		});

		// Reescribo el archivo JSON
		fs.writeFileSync(productsJSONPath, JSON.stringify(productsDB, null, " "));

		// Redirección
		return res.redirect("/products");
	},
	delete: (req, res) => {
		// Filtro el array de productos original
		const finalPdts = productsDB.filter(oneProduct => oneProduct.id !== Number(req.params.id));

		// Reescribo el archivo JSON
		fs.writeFileSync(productsJSONPath, JSON.stringify(finalPdts, null, " "));
		
		// Redirección
		return res.redirect("/products");
	},
	edit: (req, res) => {
		const productID = Number(req.params.id);

		const theProduct = productsDB.find(product => product.id === productID);

		return res.render("products-edit", { theProduct });
	},
	update: (req, res) => {
		const productID = Number(req.params.id);

		// Mapeo el array de productos original para editar el producto
		const finalPdts = productsDB.map(oneProduct => {
			if (oneProduct.id === Number(req.params.id)) {
				return { 
					...oneProduct,
					...req.body,
					image: req.file ? req.file.filename : oneProduct.image
				}
			}
			return oneProduct;
		});

		// Reescribo el archivo JSON
		fs.writeFileSync(productsJSONPath, JSON.stringify(finalPdts, null, " "));

		// Redirección
		return res.redirect(`/products/${productID}`);
	}
}

module.exports = controller;
