let validationInput = document.querySelector("#validation-input");

const validate = () => {
    if (validationInput.value.length === parseInt(validationInput.dataset.length)) {
        validationInput.classList.add("valid");
    }
    else { validationInput.classList.add("invalid") };

} 
validationInput.addEventListener("blur", validate);