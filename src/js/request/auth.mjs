/**
 * Authenticates a user by sending their data to a specified URL.
 *
 * @param {string} url - The URL endpoint to which the authentication request should be sent.
 * @param {Object} userData - The user's data to be sent for authentication.
 * @param {string} userData.email - The user's email.
 * @param {string} userData.password - The user's password.
 * @returns {Promise<Object>} - A promise that resolves to the response data from the server.
 * @throws {Error} - Throws an error if the HTTP request is not successful or other exceptions occur.
 */

export async function authUser(url, userData) {
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
        const data = await response.json();

        // Assuming the response contains a token and user details
        if (data.token) {
            localStorage.setItem('accessToken', data.token);
        }
        if (data.user && data.user.name) {
            localStorage.setItem('userName', data.user.name);
        }

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};