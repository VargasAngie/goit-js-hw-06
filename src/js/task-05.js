const inputName = document.querySelector("#name-input");
let formName = document.querySelector("#name-output");

const sayHi = event => {
    formName.textContent = event.currentTarget.value;
}
inputName.addEventListener("input", sayHi);