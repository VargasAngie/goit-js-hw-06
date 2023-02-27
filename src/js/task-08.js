const loginForm = document.querySelector(".login-form");

const controlForm = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Por favor diligencie todos los campos");
  }

  console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};
loginForm.addEventListener("submit", controlForm);
