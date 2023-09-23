import { registerForm } from '../form/auth/register.js';

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", registerForm);
});
