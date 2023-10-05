import { API_BASE_URL, API_VERSION, REGISTER_ENDPOINT } from "/src/js/api/url.mjs";
import { authUser } from "/src/js/request/request.mjs";
import { isValidUserName, isValidSocialEmail, isValidPassword } from "/src/js/validation/validation.mjs";

export async function registerForm(event) {
    event.preventDefault();
  
    const email = document.getElementById("emailInput").value;
    const name = document.getElementById("nameInput").value;
    const password = document.getElementById("passwordInput").value;
  
    // Check if the email is valid
    if (!isValidSocialEmail(email)) {
      document.getElementById("emailError").textContent =
        "Invalid Noroff email address.";
      return;
    } else {
      document.getElementById("emailError").textContent = "";
    }
  
    // Check if the password is valid
    if (!isValidPassword(password)) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters long.";
      return;
    } else {
      document.getElementById("passwordError").textContent = "";
    }
  
    // Check if the username is valid
    if (!isValidUserName(name)) {
      document.getElementById("nameError").textContent = "Username should not contain any punctuation other than underscore (_).";
      return;
    } else {
      document.getElementById("nameError").textContent = "";
    }
  
    const userToRegister = { name, email, password };
    const registerUrl = `${API_BASE_URL}${API_VERSION}${REGISTER_ENDPOINT}`;
  
    try {
        const data = await authUser(registerUrl, userToRegister);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('userName', data.name);
        window.location.href = '/src/pages/login/index.html';
    } catch (error) {
        console.error("There was an error registering:", error);
        const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
        errorModal.show();
        errorModal._element.addEventListener('hidden.bs.modal', () => {
            // Clear local storage
            localStorage.clear();
    
            // Refresh the page
            location.reload();
        });
    }
    
  }  