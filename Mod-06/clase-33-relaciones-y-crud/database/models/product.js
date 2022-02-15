module.exports = (sequelize, DataTypes) => {
	// 1. Definir la estructura de la tabla
	const Product = sequelize.define('Product', {
		name: DataTypes.STRING,
		price: DataTypes.DECIMAL(8,2),
		image: DataTypes.STRING,
		description: DataTypes.STRING,
		brandId: DataTypes.INTEGER,
	}, {});

	Product.associate = function (models) {
		// associations can be defined here
		Product.belongsTo(models.Brand, {
			as: "brand",
			foreignKey: "brandId"
		});

		Product.belongsToMany(models.Category, {
			as: "categories",
			through: "categoryProduct",
			foreignKey: "productId",
			otherKey: "categoryId"
		});
	};

	return Product;
};
