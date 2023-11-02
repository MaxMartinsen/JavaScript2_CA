import { API_BASE_URL, API_VERSION, LOGIN_ENDPOINT } from "/src/js/api/url.mjs";
import { authUser } from "/src/js/request/request.mjs";
import { validateForm } from "/src/js/utils/utils.mjs";
import { showErrorModal } from "/src/js/utils/errorHandling.mjs";
/**
 * Handles the login form submission, validates the input, and attempts to authenticate the user.
 * If authentication is successful, the user is redirected to the profile page.
 * If there's an error during authentication, an error modal is displayed.
 * @module form/auth/login
 * @async
 * @function
 * @param {Event} event - The submit event triggered by the login form.
 * @throws Will log an error to the console if there's an issue during authentication.
 */
export async function loginForm(event) {
    event.preventDefault();

    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    if (!validateForm('login', email, null, password)) return;

    const userCredentials = { email, password };
    const loginUrl = `${API_BASE_URL}${API_VERSION}${LOGIN_ENDPOINT}`;

    try {
        const data = await authUser(loginUrl, userCredentials);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('userName', data.name);
        window.location.href = '/src/pages/profile/index.html';
    } catch (error) {
        console.error("There was an error logging in:", error);
        showErrorModal();
    }
}