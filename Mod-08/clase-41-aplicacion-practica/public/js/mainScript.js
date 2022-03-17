window.addEventListener("load", function(e) {
	const topHeader = document.querySelector(".top-header");
	const logo = topHeader.querySelector("img");

	// Styles
	logo.style.border = "1px solid red";
	logo.style.padding = "30px";

	// Agregar clase
	logo.classList.add("rounded-image");

	logo.addEventListener("click", function () {
		this.classList.toggle("rounded-image");
	})
})