import { loginForm } from '../form/auth/login.js';
import { signUpButton } from "../components/buttons.js";

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", loginForm);
    if (signUpButton) {
        signUpButton.addEventListener('click', function() {
            window.location.href = '../../pages/register/index.html';
        });
    } else {
        console.error('signUpButton element not found!');
    }
});
