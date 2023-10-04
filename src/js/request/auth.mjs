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
