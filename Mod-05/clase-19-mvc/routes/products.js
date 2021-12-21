const express = require('express');

const router = express.Router();

// Requerimos el controller que está en controllers/products.js
const controller = require('../controllers/products'); 

// /products
router.get('/', controller.products);

// /products/create
router.get('/create', controller.create);

module.exports = router;
