const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/products');

// Popular la DB de productos
router.get("/mock", controller.mock);

router.get("/", controller.show);

// Formulario para crear un producto
router.get("/create", controller.createForm);

// Guardar un producto
router.post('/create', controller.store);

// Formulario para actualizar un producto
router.get("/update/:id", controller.updateForm);

// Formulario para actualizar un producto
router.patch("/update/:id", controller.update);

// Eliminar un producto
router.delete('/:id', controller.destroy);

// Detalle de un producto
router.get('/:id', controller.detail);

module.exports = router;