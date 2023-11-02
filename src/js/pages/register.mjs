/**
 * @module pages/register
 * Once the DOM is fully loaded, this script initializes the registration page.
 * It clears the local storage, sets up the registration form submission handler,
 * and provides a way to navigate to the login page.
 */
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
