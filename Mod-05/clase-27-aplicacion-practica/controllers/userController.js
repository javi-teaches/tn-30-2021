const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const filePath = path.resolve(__dirname, "../database/users.json");

const usersDB = JSON.parse(fs.readFileSync(filePath, "utf-8"));

const controller = {
	register: (req, res) => {
		res.cookie("developer", "Javi", { maxAge: (1000 * 60) * 5 });
		return res.render("userRegisterForm");
	},

	processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render("userRegisterForm", {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		const generateId = () => {
			let lastUser = usersDB[usersDB.length - 1];
			if (lastUser) {
				return lastUser.id + 1;
			}
			return 1;
		}

		const bodyData = req.body;
		delete bodyData.rePassword;

		let userToCreate = {
			id: generateId(),
			...bodyData,
			password: bcrypt.hashSync(bodyData.password, 10),
			avatar: req.file.filename
		}

		usersDB.push(userToCreate);

		fs.writeFileSync(filePath, JSON.stringify(usersDB, null, " "));

		return res.redirect("/user/login");
	},

	login: (req, res) => {
		return res.render("userLoginForm");
	},

	loginProcess: (req, res) => {
		// 1. Buscamos a la persona en la DB
		const userToLogin = usersDB.find(oneUser => oneUser.email === req.body.email);

		if (userToLogin) {
			// 2. Comparamos las contraseñas
			const isPasswordCorrect = bcrypt.compareSync(req.body.password, userToLogin.password);

			if (isPasswordCorrect) {
				// 3. Guardar al usuario logeado en Session
				delete userToLogin.password; // Borramos el password del usuario que estamos almacenando en sesion
				req.session.userLogged = userToLogin;

				if(req.body.remember_user) {
					res.cookie("userEmail", userToLogin.email, { maxAge: (1000 * 60) * 10 });
				}
	
				// 4. Finalmente redireccionamos a user/profile
				return res.redirect("/user/profile");
			}
		}
	},

	profile: (req, res) => {
		return res.render("userProfile", {
			user: req.session.userLogged
		});
	},

	logout: (req, res) => {
		res.clearCookie("userEmail");
		req.session.destroy();
		return res.redirect("/");
	}
}

module.exports = controller;