import { API_BASE_URL, API_VERSION, REGISTER_ENDPOINT } from "/src/js/api/url.mjs";
import { authUser } from "/src/js/request/request.mjs";
import { validateForm } from "/src/js/utils/validateForm.mjs";
import { showErrorModal } from "/src/js/utils/errorHandling.mjs";

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