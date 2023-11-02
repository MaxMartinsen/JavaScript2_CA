import { API_BASE_URL, API_VERSION, REGISTER_ENDPOINT } from "/src/js/api/url.mjs";
import { authUser } from "/src/js/request/request.mjs";
import { validateForm } from "/src/js/utils/utils.mjs";
import { showErrorModal } from "/src/js/utils/errorHandling.mjs";
/**
 * Handles the registration form submission, validates the input, and attempts to register the user.
 * If registration is successful, the user is redirected to the login page.
 * If there's an error during registration, an error modal is displayed.
 * @module form/auth/register
 * @async
 * @function
 * @param {Event} event - The submit event triggered by the registration form.
 * @throws Will log an error to the console if there's an issue during registration.
 */
export async function registerForm(event) {
    event.preventDefault();

    const email = document.getElementById("emailInput").value;
    const name = document.getElementById("nameInput").value;
    const password = document.getElementById("passwordInput").value;

    if (!validateForm('register', email, name, password)) return;

    const userToRegister = { name, email, password };
    const registerUrl = `${API_BASE_URL}${API_VERSION}${REGISTER_ENDPOINT}`;

    try {
        const data = await authUser(registerUrl, userToRegister);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('userName', data.name);
        window.location.href = '/src/pages/login/index.html';
    } catch (error) {
        console.error("There was an error registering:", error);
        showErrorModal();
    }
} 