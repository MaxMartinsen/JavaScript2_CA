import { isValidUserName, isValidSocialEmail, isValidPassword } from "/src/js/validation/validation.mjs";

/**
 * Utility functions for form validation.
 * @module validateForm
 * Validates form fields based on the given type.
 * 
 * @function
 * @name validateForm
 * @param {string} type - The type of form to validate. Expected values are 'login' or 'register'.
 * @param {string} email - The email address to validate.
 * @param {string} [name] - The username to validate. Required only for 'register' type.
 * @param {string} password - The password to validate.
 * @returns {boolean} Returns true if all validations pass, otherwise false.
 * @throws Will throw an error if the validation functions from the imported module throw an error.
 */
export function validateForm(type, email, name, password) {
    if (!isValidSocialEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid Noroff email address.";
        return false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (!isValidPassword(password)) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long.";
        return false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (type === 'register' && !isValidUserName(name)) {
        document.getElementById("nameError").textContent = "Username should not contain any punctuation other than underscore (_).";
        return false;
    } else if (type === 'register') {
        document.getElementById("nameError").textContent = "";
    }

    return true;
}
