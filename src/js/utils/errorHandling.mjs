/**
 * Utility functions related to error handling.
 * @module errorHandling
 * Shows an error modal to the user. When the modal is hidden, it clears the local storage and reloads the page.
 * This function assumes that there's an element with the ID 'errorModal' in the DOM and that Bootstrap's Modal component is available.
 * 
 * @function
 * @name showErrorModal
 */
export function showErrorModal() {
    const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
    errorModal.show();
    errorModal._element.addEventListener('hidden.bs.modal', () => {
        localStorage.clear();
        location.reload();
    });
};
