import { registerForm } from '../form/auth/register.js';

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", registerForm);
});

// Get the button element by its ID
const signInButton = document.getElementById('sign_in-button');

// Add a click event listener to the button
signInButton.addEventListener('click', function() {
    // Navigate to the desired page
    window.location.href = '../../pages/login/login.html';
});