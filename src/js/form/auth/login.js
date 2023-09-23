import { API_BASE_URL, API_VERSION, LOGIN_ENDPOINT } from '../../api/url.js';
import { loginUser } from '../../auth/login.js';
import { isValidSocialEmail } from '../../validation/isValidSocialEmail.js';
import { isValidPassword } from '../../validation/isValidPassword.js';

/**
 * Handles the login form submission.
 * @param {Event} event - The form submission event.
 */
export async function loginForm(event) {
    event.preventDefault();

    const email = document.getElementById("emailInput").value;
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

    const userCredentials = { email, password };

    const loginUrl = `${API_BASE_URL}${API_VERSION}${LOGIN_ENDPOINT}`;

    try {
        const data = await loginUser(loginUrl, userCredentials);
        localStorage.setItem('accessToken', data.accessToken);
        window.location.href = '../../../pages/profile/index.html';
    } catch (error) {
        console.error("There was an error logging in:", error);
    }
}
