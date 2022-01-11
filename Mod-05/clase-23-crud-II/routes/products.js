// ************ Require's ************
const express = require('express');
const path = require('path');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Multer Require and Setup ************
const multer = require('multer');

const multerDiskStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.resolve(__dirname, '../public/uploads'));
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '_img' + path.extname(file.originalname));
	},
	fileFilter: (req, file, cb) => {
		// Acá va la lógica para validar los tipos de archivo
	}
});

const upload = multer({ storage: multerDiskStorage });

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); // muestra todos los productos

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); // muestra el formulario de creación
router.post('/', upload.single('productImage'), productsController.store); // almacena la información en la DB

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail); // muestra el detalle de un producto

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/:id', productsController.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 


module.exports = router;
