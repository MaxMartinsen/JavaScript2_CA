import { API_BASE_URL, API_VERSION, REGISTER_ENDPOINT } from '/src/js/api/url.js';
import { authUser } from '/src/js/request/auth.mjs';
import { isValidUserName, isValidSocialEmail, isValidPassword } from '/src/js/validation/validation.mjs';

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
    // Check if the username is valid
    if (!isValidUserName(name)) {
        console.error("Username should not contain any punctuation other than underscore (_).");
        return;
    }

    const userToRegister = { name, email, password };

    const registerUrl = `${API_BASE_URL}${API_VERSION}${REGISTER_ENDPOINT}`;

    authUser(registerUrl, userToRegister)
        .then(data => {
            console.log(data);
            window.location.href = '/src/pages/profile/index.html';
        })
        .catch(error => {
            console.error(error);
        });
}
