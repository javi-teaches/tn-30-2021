const productsLists = [
	{
		name: 'Carpaccio fresco',
		description: 'Entrada Carpaccio de salmón con cítricos U$S 65.50'
	},
	{
		name: 'Risotto de berenjena',
		description: 'Risotto de berenjena y queso de cabra U$S 47.00'
	},
	{
		name: 'Mousse de arroz',
		description: 'Mousse de arroz con leche y aroma de azahar U$S 27.50'
	},
	{
		name: 'Espárragos blancos',
		description: 'Espárragos blancos con vinagreta de verduras y jamón ibérico U$S 37.50'
	},
	{
		name: 'Milanesa napolitana',
		description: 'Viene con fritas y tomate U$S 7.50'
	},
]

const controller = {
	index: (req, res) => {
		return res.render(
			'index',
			{
				list: productsLists
			}
		);
	},
	
	detail: (req, res) => {
		return res.render('detalleMenu');
	},
}

module.exports = controller;
