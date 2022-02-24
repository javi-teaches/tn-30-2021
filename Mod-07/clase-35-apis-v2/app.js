const express = require('express');
const fetch = require('node-fetch');
const axios = require('axios');

const app = express();

app.get("/", async (req, res) => {
	const apiKey = "dcd3bf7aa7b25dcb3162909c8417a2e0";
	const city = req.query.city;
	const endPoint = "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey +"&q=" + city + "&units=metric";
	// const endPoint2 = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=metric`;
	const giphyEndPoint = "https://api.giphy.com/v1/gifs/trending?api_key=F33mpVK2IB05XXqzCIQUxVLlrKiX8MB9&limit=10&rating=g";
	
	try {
		const weather = await fetch(endPoint).then(function (response) { return response.json() });
		const gifs = await axios.get(giphyEndPoint);
			
		return res.json({
			developer: "TN30",
			city: city,
			temperature: weather.main.temp,
			gifs: gifs.data
		});			
	} catch (error) {
		return res.json({
			error: error
		})
	}

})

app.listen(3000, () => console.log("listening on port: 3000"));