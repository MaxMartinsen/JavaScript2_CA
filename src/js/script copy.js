/**
 * Base URL for the API.
 * @type {string}
 */
export const API_BASE_URL = 'https://api.noroff.dev';

/**
 * API version endpoint.
 * @type {string}
 */
export const API_VERSION = '/api/v1';

/**
 * Endpoint for user registration.
 * @type {string}
 */
export const REGISTER_ENDPOINT = '/social/auth/register';

/**
 * Endpoint for user login.
 * @type {string}
 */
export const LOGIN_ENDPOINT = '/social/auth/login';

/**
 * This endpoint returns all posts in an array.
 * @type {string}
 */
export const POSTS_ENDPOINT = '/social/posts';

/**
 * This endpoint returns all profile in an array.
 * @type {string}
 */
export const PROFILES_ENDPOINT = '/social/profiles';

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
//=========================================================
import { API_BASE_URL, API_VERSION, LOGIN_ENDPOINT } from '../../api/url';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", loginUser);
});

async function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    const userCredentials = {
        email: email,
        password: password
    };

    const loginUrl = `${API_BASE_URL}${API_VERSION}${LOGIN_ENDPOINT}`;

    try {
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userCredentials)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Store the accessToken in localStorage for future use
        localStorage.setItem('accessToken', data.accessToken);
        // Redirect to the profile page
        window.location.href = '../profile/index.html';

    } catch (error) {
        console.error("There was an error logging in:", error);
    }
}
