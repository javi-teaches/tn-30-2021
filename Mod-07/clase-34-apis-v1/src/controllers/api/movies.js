const { Movie } = require("../../database/models");

module.exports = {
	show: async (req, res) => {
		const authTokens = ["123abc", "456xyz"];
		
		const isToken = req.query.token;

		let movies;

		if (isToken) {
			if (authTokens.includes(req.query.token)) {
				movies = await Movie.findAll({ 
					include: ["genre"]
				});
			} else {
				return res.status(404).json({ 
					error: "Invalid token",
					message: "Please provide a valid token"
				})
			}
		} else {
			movies = await Movie.findAll({
				attributes: ["title"]
			});
		}

		return res.json({
			total: movies.length,
			movies: movies
		})
	},

	store: async (req, res) => {
		const movieStored = await Movie.create(req.body);
		return res.status(200).json(movieStored);
	},
	
	detail: async (req, res) => {
		const movie = await Movie.findByPk(req.params.id, {
			include: ["genre"]
		});

		return res.status(200).json(movie);
	},
	
	delete: async (req, res) => {
		const isDelete = await Movie.destroy({ 
			where: { id: req.params.id }
		});

		if (isDelete) {
			return res.status(200).json({
				message: "Movie has been deleted"
			});
		}

		return res.status(500).json({
			message: "Problems deleting the movie, try again"
		});
	},
};
