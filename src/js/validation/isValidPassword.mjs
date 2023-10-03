/**
 * Validates if the provided password meets the criteria.
 * @param {string} password - The password string to validate.
 * @returns {boolean} - Whether or not the password is valid.
 */
export const isValidPassword = (password) => {
    return password.length >= 8;
};