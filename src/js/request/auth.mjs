/**
 * Registers a user by making a POST request to the provided URL with the given user data.
 * @param {string} url - The endpoint URL.
 * @param {Object} userData - The user data to be sent to the server.
 * @returns {Promise<Object>} - The JSON response from the server.
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
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};