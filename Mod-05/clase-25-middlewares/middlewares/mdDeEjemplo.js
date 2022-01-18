function mdDeEjemplo (req, res, next) {
	console.log("Pasaste por el middleware de ejemplo");
	next(); // Ok, sigo para adelante
}

module.exports = mdDeEjemplo;
