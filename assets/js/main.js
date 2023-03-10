console.log("");

const input = document.getElementById("password");
const output = document.querySelector("p");

function checkPassword() {
    let pass = password.value.length >= 8

    pass ? output.innerHTML = "Welcome to your Account" : output.innerHTML = "Your password to short"
}  