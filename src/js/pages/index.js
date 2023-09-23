import { signInButton, signUpButton } from '../components/buttons.js';

document.addEventListener('DOMContentLoaded', function() {
    if (signInButton) {
        signInButton.addEventListener('click', function() {
            window.location.href = '../src/pages/login/login.html';
        });
    } else {
        console.error('signInButton element not found!');
    }
    if (signUpButton) {
        signUpButton.addEventListener('click', function() {
            window.location.href = '../src/pages/register/index.html';
        });
    } else {
        console.error('signUpButton element not found!');
    }
});
