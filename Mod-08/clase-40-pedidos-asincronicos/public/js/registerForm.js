fetch("https://restcountries.com/v3.1/subregion/South America")
	.then((response) => {
		if(response.status === 200){
			return response.json()
		}
		console.log("Se cayó la API");
	})
	.then((info) => {
		const countries = info;
		const countriesByName = countries.map(oneCountry => oneCountry.name.common);
		const countriesSortedByName = countriesByName.sort();
		const selectCountries = document.querySelector("#selectCountries");
		countriesSortedByName.forEach(function (countryName, i) {
			selectCountries.innerHTML += `<option value=${countryName}> ${countryName} </option>`;
		})
	})
	.catch((error) => {
		console.log(error);
	})

sessionStorage.setItem("miNombre", "Javi");
localStorage.setItem("miApellido", "Herrera");