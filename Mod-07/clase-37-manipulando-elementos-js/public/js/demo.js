// Selectores de JS
/*
	- querySelector
	- querySelectorAll
	- getElementById
	- getElementsByClassName
	- getElementByTagName
*/ 

const mainTitle = document.querySelector("h1");
mainTitle.innerHTML = "<i>Hello</i> world!";
console.log(mainTitle.innerHTML);

// mainTitle.style.color = "white";
// mainTitle.style.backgroundColor = "orange";
// mainTitle.style.fontSize = "40px";
// mainTitle.style.textAlign = "center";

mainTitle.addEventListener("click", () => {
	mainTitle.classList.toggle("special-title");
	mainTitle.classList.toggle("alert-success");
	if (mainTitle.classList.contains("alert-success")) {
		console.log("Yupiiiii!");
	}
})


const liElements = document.querySelectorAll(".navbar-nav li");
console.log(liElements);