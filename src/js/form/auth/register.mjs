import { API_BASE_URL, API_VERSION, REGISTER_ENDPOINT } from '/src/js/api/url.mjs';
import { authUser } from '/src/js/request/request.mjs';
import { isValidUserName, isValidSocialEmail, isValidPassword } from '/src/js/validation/validation.mjs';

export async function registerForm(event) {
    event.preventDefault();

    const email = document.getElementById("emailInput").value;
    const name = document.getElementById("nameInput").value;
    const password = document.getElementById("passwordInput").value;

    if (!isValidSocialEmail(email)) {
        console.error("Invalid Noroff email address.");
        return;
    }

    if (!isValidPassword(password)) {
        console.error("Password must be at least 8 characters long.");
        return;
    }

    if (!isValidUserName(name)) {
        console.error("Username should not contain any punctuation other than underscore (_).");
        return;
    }

    const userToRegister = { name, email, password };
    const registerUrl = `${API_BASE_URL}${API_VERSION}${REGISTER_ENDPOINT}`;

    try {
        const data = await authUser(registerUrl, userToRegister);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('userName', data.name);
        window.location.href = '/src/pages/login/index.html';
    } catch (error) {
        console.error("There was an error registering:", error);
    }
};