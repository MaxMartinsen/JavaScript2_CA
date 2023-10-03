/**
 * Validates if the provided string is a valid social Noroff or general email.
 * @param {string} email - The email string to validate.
 * @returns {boolean} - Whether or not the email is valid.
 */
export const isValidSocialEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(stud\.)?noroff\.no$/;
    return regex.test(email);
};


