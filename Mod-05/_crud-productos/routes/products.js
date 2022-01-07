// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); // muestra todos los productos

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); // muestra el formulario de creación
router.post('/', productsController.store); // almacena la información en la DB

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail); // muestra el detalle de un producto

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/:id', productsController.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 


module.exports = router;
