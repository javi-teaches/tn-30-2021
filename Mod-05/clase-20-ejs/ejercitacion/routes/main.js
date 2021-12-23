const express = require('express');

const router = express.Router();

// Controller
const controller = require('../controllers/main');

// http://localhost:3000/
router.get('/', controller.index);

// http://localhost:3000/detalle/N
router.get('/detalle/:id', controller.detail);

module.exports = router;