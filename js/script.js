document.getElementById("btn").addEventListener("click", validateLogin);

function validateLogin() {
    const correctUsername = 'adm';
    const correctPassword = '123';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const errorMessage = document.getElementById('error-message');

    if (username === correctUsername && password === correctPassword) {
        window.location.href = 'teste.html';
    } else {
       errorMessage.innerText = 'Login ou senha estão incorretos.';
    }
}