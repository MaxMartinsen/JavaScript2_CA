import { signUpButton } from "../components/buttons.js";

document.addEventListener('DOMContentLoaded', function() {
    if (signUpButton) {
        signUpButton.addEventListener('click', function() {
            window.location.href = '../../pages/register/index.html';
        });
    } else {
        console.error('signUpButton element not found!');
    }
});