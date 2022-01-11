const movies = [
	{id: 1, name: 'Duro de matar', rating: 8, poster: 'black-widow.jpg'},
	{id: 2, name: 'El rey león', rating: 9, poster: 'captain-america.jpg'},
	{id: 3, name: 'Spiderman, no way home', rating: 7, poster: 'black-panther.jpg'},
];

const users = [
	{id: 'abc', name: 'Jhon Doe'},
	{id: 'def', name: 'Jane Jones'},
	{id: 'hij', name: 'Mery Jane'}
]

const controller = {
	index: (req, res) => {
		return res.render('home', {
			listadoPeliculas: movies,
			listadoUsuarios: users
		});
	},
	contact: (req, res) => {
		return res.render('contact');
	},
	services: (req, res) => {
		return res.render('services');
	},
	detail: (req, res) => {
		const laPeli = movies.find(oneMovie => oneMovie.id == req.params.id)
		return res.render('detail', { laPeli: laPeli });
	},
}

module.exports = controller;