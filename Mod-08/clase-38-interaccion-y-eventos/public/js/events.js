window.addEventListener("load", () => {
	const body = document.querySelector("body");
	
	// function ClickSobreElBody () {
	// 	console.log("Hiciste click sobre el body");
	// }
	
	// body.addEventListener("click", ClickSobreElBody);
	
	// const ClickSobreElBody2 = () => {
	// 	console.log("dejá de hacer click por favor");
	// }
	
	// body.addEventListener("click", ClickSobreElBody2);
	
	body.addEventListener("keypress", (e) => {
		if (e.key === "x") {
			body.style.backgroundColor = "black";
		}
	});

	const testButton = document.querySelector("#testButton");
	testButton.addEventListener("click", function (e) {
		console.log(e);
	})

	const userName = document.querySelector("#userName");
	userName.addEventListener("blur", function (e) {
		if(e.target.value === "") {
			userName.style.border = "1px solid red";
		} else {
			userName.style.border = "1px solid #222";
		}
	})

	switch (estadoSecreto) {
		case 0:
			e.key == "s" ? estadoSecreto++ : (estadoSecreto = 0);
			break;
		case 1:
			e.key == "e" ? estadoSecreto++ : (estadoSecreto = 0);
			break;
		case 2:
			e.key == "c" ? estadoSecreto++ : (estadoSecreto = 0);
			break;
		case 3:
			e.key == "r" ? estadoSecreto++ : (estadoSecreto = 0);
			break;
		case 4:
			e.key == "e" ? estadoSecreto++ : (estadoSecreto = 0);
			break;
		case 5:
			e.key == "t" ? estadoSecreto++ : (estadoSecreto = 0);
			break;
		case 6:
			if (e.key == "o") {
				alert("SECRETO MAGICO");
			}
			estadoSecreto = 0;
			break;
	}
})