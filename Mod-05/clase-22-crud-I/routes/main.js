const express = require('express');

const router = express.Router();

// Controller
const controller = require('../controllers/main');

// http://localhost:3000
router.get('/', controller.index);

// http://localhost:3000/contact
router.get('/contact', controller.contact);

// http://localhost:3000/services
router.get('/services', controller.services);

// http://localhost:3000/services
router.get('/detail/:id', controller.detail);

module.exports = router;
