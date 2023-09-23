import { API_BASE_URL, API_VERSION, REGISTER_ENDPOINT } from '../../api/url.js';
import { registerUser } from '../../auth/register.js';
import { isValidSocialEmail } from '../../validation/isValidSocialEmail.js';
import { isValidPassword } from '../../validation/isValidPassword.js';

/**
 * Handles the registration form submission.
 * @param {Event} event - The form submission event.
 */
export function registerForm(event) {
    event.preventDefault();

    const email = document.getElementById("emailInput").value;
    const name = document.getElementById("nameInput").value;
    const password = document.getElementById("passwordInput").value;

    // Check if the email is valid
    if (!isValidSocialEmail(email)) {
        console.error("Invalid Noroff email address.");
        return;
    }
    // Check if the password is valid
    if (!isValidPassword(password)) {
        console.error("Password must be at least 8 characters long.");
        return;
    }

    const userToRegister = { name, email, password };

    const registerUrl = `${API_BASE_URL}${API_VERSION}${REGISTER_ENDPOINT}`;

    registerUser(registerUrl, userToRegister)
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}
