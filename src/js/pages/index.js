import { signInButton, signUpButton } from '../components/buttons.js';

document.addEventListener('DOMContentLoaded', function() {
    // Handle signInButton click
    if (signInButton) {
        signInButton.addEventListener('click', function() {
            window.location.href = '../src/pages/login/login.html';
        });
    } else {
        console.error('signInButton element not found!');
    }

    // Handle signUpButton click
    if (signUpButton) {
        signUpButton.addEventListener('click', function() {
            window.location.href = '../src/pages/register/index.html';
        });
    } else {
        console.error('signUpButton element not found!');
    }

    // Check if the user has logged in before
    const hasLoggedInBefore = localStorage.getItem('hasLoggedInBefore');
    if (hasLoggedInBefore) {
        // Redirect to the login page after a delay of 2 seconds
        setTimeout(() => {
            window.location.href = '../src/pages/login/login.html';
        }, 1500);
    } else {
        // Redirect to the registration page
        setTimeout(() => {
            window.location.href = '../src/pages/register/index.html';
        }, 1500);
    }
});

