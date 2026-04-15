function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.nav-links li').forEach(link => {
        link.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    const activeLink = document.getElementById('link-' + tabId);
    if (activeLink) activeLink.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectOption(button, fieldName, value) {
    const parent = button.parentElement;
    parent.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const hiddenInput = parent.parentElement.querySelector(`input[name="${fieldName}"]`);
    if (hiddenInput) hiddenInput.value = value;
}

function scrollToForm() {
    document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
}
