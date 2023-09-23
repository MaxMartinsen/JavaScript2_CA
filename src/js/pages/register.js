import { registerForm } from '../form/auth/register.js';
import { signInButton } from '../components/buttons.js';

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", registerForm);
    if (signInButton) {
        signInButton.addEventListener('click', function() {
            window.location.href = '../../pages/login/login.html';
        });
    } else {
        console.error('signInButton element not found!');
    }
});