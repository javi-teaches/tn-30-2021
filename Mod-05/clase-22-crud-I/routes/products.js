const express = require('express');

const router = express.Router();

// controller
const controller = require('../controllers/products');

// GET - http://localhost:3000/products
router.get('/', controller.browse);

// GET - http://localhost:3000/products/create
router.get('/create', controller.create);
// POST - http://localhost:3000/products/
router.post('/', controller.add);

// GET - http://localhost:3000/products/edit/:id
router.get('/edit/:id', controller.edit);
// PUT - http://localhost:3000/products/:id
router.put('/:id', controller.update);

// GET - http://localhost:3000/products/:id
router.get('/:id', controller.read);

// DELETE - http://localhost:3000/products/:id
router.delete('/:id', controller.delete);





module.exports = router;