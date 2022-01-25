function authMiddleware(req, res, next) {
	if (req.session.userLogged === undefined) {
		// NO hay alguien logueado
		return res.redirect("/user/login");
	}

	next();
}

module.exports = authMiddleware;