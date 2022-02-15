const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/products');

// Mostrar todos los productos
router.get("/", controller.show);

// Formulario para crear un producto
router.get("/create", controller.create);

// Guardar un producto
router.post('/create', controller.store);

// Eliminar un producto
router.delete('/:id', controller.destroy);

// Detalle de un producto
router.get('/:id', controller.detail);

module.exports = router;