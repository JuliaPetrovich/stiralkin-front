const dialog = document.getElementById('privacyPolicyDialog');
const button = document.getElementById('openDialog');

button.onclick = function() {
    document.body.style.overflow = 'hidden';
    dialog.showModal();
}

function closeDialog() {
    document.body.style.overflow = '';
    dialog.close();
}

dialog.addEventListener('cancel', closeDialog);

window.onclick = function(event) {
    if (event.target === dialog) {
        closeDialog();
    }
}