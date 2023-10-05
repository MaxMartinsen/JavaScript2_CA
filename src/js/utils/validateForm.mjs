import { isValidUserName, isValidSocialEmail, isValidPassword } from "/src/js/validation/validation.mjs";

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
