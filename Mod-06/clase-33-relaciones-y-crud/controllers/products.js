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
		const products = await Product.findAll({ include: ["brand"] });
		return res.render("index", { products });
	},
	create: async (req, res) => {
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
	destroy: (req, res) => {},
	detail: (req, res) => {},
}

module.exports = controller;
