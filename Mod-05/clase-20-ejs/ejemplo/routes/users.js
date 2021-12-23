const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	return res.send('Vas a ver los usuarios');
});

router.get('/create', (req, res) => {
	return res.send('Vas a crear un usuario');
});

module.exports = router;