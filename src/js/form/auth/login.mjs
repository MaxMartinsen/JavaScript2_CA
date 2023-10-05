import { API_BASE_URL, API_VERSION, LOGIN_ENDPOINT } from "/src/js/api/url.mjs";
import { authUser } from "/src/js/request/request.mjs";
import {
  isValidSocialEmail,
  isValidPassword,
} from "/src/js/validation/validation.mjs";

export async function loginForm(event) {
  event.preventDefault();

  const email = document.getElementById("emailInput").value;
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
    console.error("Password must be at least 8 characters long.");
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters long.";
    return;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  const userCredentials = { email, password };

  const loginUrl = `${API_BASE_URL}${API_VERSION}${LOGIN_ENDPOINT}`;

  try {
    const data = await authUser(loginUrl, userCredentials);
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('userName', data.name);
    window.location.href = '/src/pages/profile/index.html';
  } catch (error) {
    console.error("There was an error logging in:", error);
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
