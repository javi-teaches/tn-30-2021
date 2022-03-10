module.exports = (sequelize, DataTypes) => {
	// 1. Definir la estructura de la tabla
	const Brand = sequelize.define('Brand', {
		name: DataTypes.STRING,
	}, {});

	Brand.associate = function (models) {
		// associations can be defined here
	};

	return Brand;
};
