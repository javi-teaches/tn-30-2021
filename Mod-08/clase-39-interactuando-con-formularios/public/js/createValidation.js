const productCreateForm = document.querySelector("#productCreateForm");

const productNameField = document.querySelector("[name=name]");
const productPriceField = document.querySelector("[name=price]");
const productBrandField = document.querySelector("[name=brandId]");

const validateEmptyField = (e) => {
	const field = e.target;
	const spanTagError = field.nextElementSibling; // capturo al <span></span> hermano
	if (field.value.trim() === "") {
		field.classList.add("is-invalid");
		spanTagError.innerText = `El campo ${field.name} es obligatorio`;
		spanTagError.classList.add("invalid-feedback");
	} else {
		field.classList.remove("is-invalid");
		field.classList.add("is-valid");
		spanTagError.innerText = "";
		spanTagError.classList.remove("invalid-feedback");
	}
}

productNameField.addEventListener("blur", validateEmptyField);
productPriceField.addEventListener("blur", validateEmptyField);
productPriceField.addEventListener("input", (e) => {
	const field = e.target;
	const price = field.value;
	const spanTagError = field.nextElementSibling; // capturo al <span></span> hermano
	if(isNaN(price)) {
		field.classList.add("is-invalid");
		spanTagError.innerText = `Debes ingresar solo números`;
		spanTagError.classList.add("invalid-feedback");
	} else {
		field.classList.remove("is-invalid");
		field.classList.add("is-valid");
		spanTagError.innerText = "";
		spanTagError.classList.remove("invalid-feedback");
	}
});

productBrandField.addEventListener("change", validateEmptyField);

productCreateForm.addEventListener("submit", function (e) {
	let thereAreErrors = false;
	
	const formFields = [...productCreateForm.elements];
	formFields.pop();

	formFields.forEach(oneField => {
		const spanTagError = oneField.nextElementSibling; // capturo al <span></span> hermano
		if (oneField.value.trim() === "") {
			oneField.classList.add("is-invalid");
			spanTagError.innerText = `El campo ${oneField.name} es obligatorio`;
			spanTagError.classList.add("invalid-feedback");
			
			thereAreErrors = true;
		} else {
			oneField.classList.remove("is-invalid");
			oneField.classList.add("is-valid");
			spanTagError.innerText = "";
			spanTagError.classList.remove("invalid-feedback");
		}
	})

	if (thereAreErrors) {
		e.preventDefault(); // Evita que se envié el formulario
	}
});