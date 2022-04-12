module.exports = (sequelize, DataTypes) => {
  // 1. Definir la estructura de la tabla
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});

  return User;
};
