const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "../database/users.json");
const usersDB = JSON.parse(fs.readFileSync(filePath, "utf-8"));

function autoLoginMiddleware (req, res, next) {
	const emailInCookie = req.cookies.userEmail;

	if (emailInCookie !== undefined) {
		const userToLogin = usersDB.find(oneUser => oneUser.email === emailInCookie);
		delete userToLogin.password;
		req.session.userLogged = userToLogin;
	}

	next();
}

module.exports = autoLoginMiddleware;