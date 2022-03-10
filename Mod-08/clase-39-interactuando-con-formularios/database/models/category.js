module.exports = (sequelize, DataTypes) => {
	// 1. Definir la estructura de la tabla
	const Category = sequelize.define('Category', {
		name: DataTypes.STRING,
	}, {});

	Category.associate = function (models) {
		// associations can be defined here
		Category.belongsToMany(models.Product, {
			as: "products",
			through: "categoryProduct",
			foreignKey: "categoryId",
			otherKey: "productId"
		});
	};

	return Category;
};
