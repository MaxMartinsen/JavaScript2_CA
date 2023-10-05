/**
 * @module pages/login
 * Once the DOM is fully loaded, this script initializes the login page by setting up
 * event listeners for the form submission and signUpButton. It handles the login form
 * submission and redirects users who want to sign up to the registration page.
 */

import { loginForm } from '/src/js/form/auth/login.mjs';
import { signUpButton } from "/src/js/components/buttons.mjs";

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