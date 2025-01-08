function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('open');
    document.getElementById('overlay').classList.add('open');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('open'));
    document.getElementById('overlay').classList.remove('open');
}

function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('dateTime').innerText = now.toLocaleDateString(undefined, options);
}

setInterval(updateDateTime, 1000);
updateDateTime();