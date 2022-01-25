const controller = {
	index: (req, res) => {
		const developer = req.cookies.developer;
		return res.render('index', { developer });
	}
}

module.exports = controller;