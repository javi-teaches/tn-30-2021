const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => {
	console.log('Servidor corriendo en el puerto 3000');
});

app.use( express.static( 'public' ) );

app.get('/', (req, res) => {
	let htmlPath = path.resolve(__dirname, 'views/home.html');
	res.sendFile(htmlPath);
})