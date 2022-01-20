const path = require('path');
const { check } = require('express-validator');

module.exports = [
	check('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
	check('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	check('password')
		.notEmpty().withMessage('Tienes que escribir una contraseña').bail()
		.custom((value, { req }) => {
			if (value !== req.body.rePassword) {
				throw new Error('Las contraseñas tienen que coincidir');
			}
			return true;
		}),
	check('rePassword').custom((value, { req }) => {
		if (req.body.password !== "" && value !== req.body.password) {
			throw new Error('Las contraseñas tienen que coincidir');
		}
		return true;
	}),
	check('country').notEmpty().withMessage('Tienes que elegir un país'),
	check('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]