const { Product, Brand, Category } = require("../database/models");

const controller = {
	// show: function (req, res) {
	// 	Product
	// 		.findAll({
	// 			include: ["brand"]
	// 		})
	// 		.then((products) => {
	// 			return res.render("index", { products });
	// 		})
	// 		.catch((err) => { console.log(err) });
	// },
	show: async (req, res) => {
		const products = await Product.findAll({ include: ["brand", "categories"] });
		return res.render("index", { products });
	},
	createForm: async (req, res) => {
		try {
			const categories = await Category.findAll({});
			const brands = await Brand.findAll({});
			return res.render("create", {
				brands, categories
			});
		} catch (error) {
			console.log(error);
		}
	},

	store: async (req, res) => {
		const productStored = await Product.create(req.body);
		productStored.addCategories(req.body.categories);
		return res.redirect("/products");
	},
	
	destroy: async (req, res) => {
		const productID = req.params.id;
		// const productToDelete = await Product.findByPk(productID, { include: ["categories"]});
		// productToDelete.removeCategories(productToDelete.categories);
		// productToDelete.destroy();
		Product.destroy({ where: { id: productID }});
		return res.redirect("/products");
	},
	
	detail: async (req, res) => {
		const productID = req.params.id;
		const productFinded = await Product.findByPk(productID, { include: ["brand", "categories"] });
		return res.render("detail", { productFinded });
	},

	updateForm: async (req, res) => {
		const productID = req.params.id;
		const productFinded = await Product.findByPk(productID, { include: ["brand", "categories"] });
		const categories = await Category.findAll({});
		const brands = await Brand.findAll({});
		return res.render("update", { productFinded, categories, brands });
	},

	update: async (req, res) => {
		return res.send(req.params.id);
	}
}

module.exports = controller;
