const mdDeCrearProductos = (req, res, next) => {
	console.log("Pasaste por /products/create");
	const dia = "lunes";
	if(dia === "lunes") {
		return next();
	} else {
		return res.redirect("/");
	}
}

module.exports = mdDeCrearProductos;