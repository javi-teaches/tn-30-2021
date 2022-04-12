const inputNameField = document.querySelector("[name=email]");

inputNameField.addEventListener("blur", () => {
  let fieldValue = inputNameField.value;
  let divElement = inputNameField.parentElement.querySelector(".alert");
  if (fieldValue !== "") {
    let payload = { email: fieldValue };
    fetch("http://localhost:5500/users/get-by-email", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        const { status } = data;
        if (status === "error") {
          divElement.innerText = "Che, ese mail ya está registrado.";
        }
        if (status === "ok") {
          divElement.classList.remove("alert-danger");
          divElement.classList.add("alert-success");
          divElement.innerText = "No veo problemas en tu lógica";
        }
      })
      .catch(error => console.log(error));
  }
})