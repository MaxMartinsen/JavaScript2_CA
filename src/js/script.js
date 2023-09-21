/**
 * Base URL for the API.
 * @type {string}
 */
const API_BASE_URL = 'https://api.noroff.dev';

/**
 * API version endpoint.
 * @type {string}
 */
const API_VERSION = '/api/v1';

/**
 * Endpoint for user registration.
 * @type {string}
 */
const REGISTER_ENDPOINT = '/social/auth/register';

/**
 * Registers a user by making a POST request to the provided URL with the given user data.
 * @param {string} url - The endpoint URL.
 * @param {Object} userData - The user data to be sent to the server.
 * @returns {Promise<Object>} - The JSON response from the server.
 */
async function registerUser(url, userData) {
    try {
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        if (!response.ok) {
            throw new Error(`HTTPS error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

/**
 * Handles the registration form submission.
 * @param {Event} event - The form submission event.
 */
function registerForm(event) {
    event.preventDefault();

    const email = document.getElementById("emailInput").value;
    const name = document.getElementById("nameInput").value;
    const password = document.getElementById("passwordInput").value;

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

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", registerForm);
});
