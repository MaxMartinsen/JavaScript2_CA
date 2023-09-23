/**
 * Validates if the provided username meets the criteria.
 * @param {string} name - The username string to validate.
 * @returns {boolean} - Whether or not the username is valid.
 */
export const isValidUserName = (name) => {
    const regex = /^[a-zA-Z0-9_]+$/;
    return regex.test(name);
};
