const { body } = require("express-validator");

const validations = [
  body("name").notEmpty().withMessage("El campo nombre no puede estar vacío").bail(),
]

module.exports = validations;