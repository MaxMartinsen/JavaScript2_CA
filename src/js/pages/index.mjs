import { signInButton, signUpButton } from '/src/js/components/buttons.mjs';

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
        setTimeout(() => {
            window.location.href = '../src/pages/login/login.html';
        }, 1500);
    } else {
        setTimeout(() => {
            window.location.href = '../src/pages/register/index.html';
        }, 1500);
    }
});

