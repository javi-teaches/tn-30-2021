const formElement = document.querySelector("form");
const inputNameField = document.querySelector("#nameField");

inputNameField.addEventListener("blur", () => {
  let fieldValue = inputNameField.value;
  let divElement = inputNameField.parentElement.querySelector(".alert");
  if (fieldValue === "") {
    divElement.innerText = "Oye. Deberías poner un nombre de producto, ¡dale copate!"
  }
})