let passwordInput = document.getElementById("password")
let emailInput = document.getElementById("email")
let submitBtn = document.getElementById("submit")
let errorEmail = document.getElementsByClassName("error-email")[0]
let errorPassword = document.getElementsByClassName("error-password")[0]
let form = document.getElementsByTagName("form")[0]

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (emailInput.value.length == 0) {
        errorEmail.innerHTML = "email is required";
    }
    if (passwordInput.value.length == 0) {
        errorPassword.innerHTML = "password is required"

    }
    if (passwordInput.value.length < 8) {
        errorPassword = "password must have atleast 8 characters"
    }
    if (passwordInput.value.length >= 8 && emailInput.value.length > 0 && emailInput.value.includes("@")) {
      form.innerHTML = `<div class="success-message">Form successfully submitted  <img src="check.svg" width="30" height="30" alt=""> </div>`
    }


})
emailInput.addEventListener("input", (e) => {

    if (emailInput.value.length == 0) {
        errorEmail.innerHTML = "email is required";
    }
    else if (emailInput.value.includes("@") == false) {
        errorEmail.innerHTML = "email is invalid";

    }
    else if (emailInput.value.length > 0 || emailInput.value.includes("@") == true) {

        errorEmail.innerHTML = "";
    }
})


passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length == 0) {
        errorPassword.innerHTML = "password is required"

    }
    else if (passwordInput.value.length < 8) {
        errorPassword.innerHTML = "password must have atleast 8 characters"
    }
    else if (passwordInput.value.length >= 8) {
        errorPassword.innerHTML = ''
    }
})