let passwordInput = document.getElementById("password")
let emailInput = document.getElementById("email")
let confirmPasswordInput = document.getElementById("confirm-password")
let nameInput = document.getElementById("name")
let usernameInput = document.getElementById("username")
let submitBtn = document.getElementById("submit")
let errorEmail = document.getElementsByClassName("error-email")[0]
let errorPassword = document.getElementsByClassName("error-password")[0]
let errorName = document.getElementsByClassName("error-name")[0]
let errorUsername = document.getElementsByClassName("error-username")[0]
let errorConfirmPassword = document.getElementsByClassName("error-confirm-password")[0]
let form = document.getElementsByTagName("form")[0]

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (nameInput.value.length == 0) {
        errorName.innerHTML = "name is required"

    }
    if (usernameInput.value.length == 0) {
        errorUsername.innerHTML = "username is must"

    }
    if (usernameInput.value.match(/[0-9]/) == null) {
        errorUsername.innerHTML = "username must include a number"

    }

    if (emailInput.value.length == 0) {
        errorEmail.innerHTML = "email is required";
    }
    if (passwordInput.value.length == 0) {
        errorPassword.innerHTML = "password is required"

    }
    if (passwordInput.value.length < 8) {
        errorPassword.innerHTML = "password must have  atleast  8 characters"
    }
    if (confirmPasswordInput.value.length == 0) {
        errorConfirmPassword.innerHTML = "confirm password is required"
    }
    if (confirmPasswordInput.value != passwordInput.value) {
        errorConfirmPassword.innerHTML = "Password and confirm password must match"
    }
    if (passwordInput.value.length >= 8 && emailInput.value.length > 0 && emailInput.value.includes("@") && nameInput.value.length > 0 && usernameInput.value.length > 0 && confirmPasswordInput.value == passwordInput.value) {
        form.innerHTML = `<div class="success-message">Form successfully submitted  <img src="check.svg" width="30" height="30" alt=""> </div>`
    }


})

nameInput.addEventListener("input", () => {
    if (nameInput.value.length == 0) {
        errorName.innerHTML = "name is required"

    } else {

        errorName.innerHTML = ""
    }

})

usernameInput.addEventListener("input", () => {
    if (usernameInput.value.length == 0) {
        errorUsername.innerHTML = "username is must"

    }
    console.log(usernameInput.value.match(/[0-9]/))
    if (usernameInput.value.match(/[0-9]/) == null) {
        errorUsername.innerHTML = "username must include a number"
    }
    if (usernameInput.value.length > 0 && usernameInput.value.match(/[0-9]/) != null) {
        errorUsername.innerHTML = ""
    }
})

confirmPasswordInput.addEventListener("input", () => {
    if (confirmPasswordInput.value.length == 0) {
        errorConfirmPassword.innerHTML = "confirm password is required"
    }
    if (confirmPasswordInput.value != passwordInput.value) {
        errorConfirmPassword.innerHTML = "Password and confirm password must match"
    }
    if (confirmPasswordInput.value.length > 0 && confirmPasswordInput.value == passwordInput.value) {
        errorConfirmPassword.innerHTML = ""
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

