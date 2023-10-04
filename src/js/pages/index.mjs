import { signInButton, signUpButton } from '/src/js/components/buttons.mjs';

document.addEventListener('DOMContentLoaded', function() {
    // Handle signInButton click
    if (signInButton) {
        signInButton.addEventListener('click', function() {
            window.location.href = '../src/pages/login/index.html';
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
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        setTimeout(() => {
            window.location.href = '../src/pages/login/index.html';
        }, 1500);
    } else {
        setTimeout(() => {
            window.location.href = '../src/pages/register/index.html';
        }, 1500);
    }
});

