const themeButton = document.querySelector("#themeButton");
const themeCSSLink = document.querySelector("#cssTheme");

const isDarkThemeActive = localStorage.getItem("darkThemeActive") === "true" ? true : false;

if (isDarkThemeActive) {
	themeCSSLink.setAttribute("href", "/css/darkTheme.css");
	themeButton.innerHTML = "Active Light Theme?"
}

themeButton.addEventListener("click", () => {
	themeCSSLink.setAttribute("href", "/css/darkTheme.css");
	localStorage.setItem("darkThemeActive", true);
})