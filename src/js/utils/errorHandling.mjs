export function showErrorModal() {
    const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
    errorModal.show();
    errorModal._element.addEventListener('hidden.bs.modal', () => {
        localStorage.clear();
        location.reload();
    });
};
