import { API_BASE_URL, API_VERSION, LOGIN_ENDPOINT } from '/src/js/api/url.mjs';
import { authUser } from '/src/js/request/auth.mjs';
import { isValidSocialEmail, isValidPassword } from '/src/js/validation/validation.mjs';

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
        const data = await authUser(loginUrl, userCredentials);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('userName', data.name);
        window.location.href = '/src/pages/profile/index.html';
    } catch (error) {
        console.error("There was an error logging in:", error);
    }
};