import { registerForm } from '/src/js/form/auth/register.mjs';
import { signInButton } from '/src/js/components/buttons.mjs';

document.addEventListener("DOMContentLoaded", function() {
    localStorage.clear();

    const form = document.querySelector("form");
    form.addEventListener("submit", registerForm);
    
    if (signInButton) {
        signInButton.addEventListener('click', function() {
            window.location.href = '../../pages/login/index.html';
        });
    } else {
        console.error('signInButton element not found!');
    }
});