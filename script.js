// Função para trocar as abas do site
function showTab(tabId) {
    // Esconde todos os conteúdos
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Desativa todos os links do menu
    document.querySelectorAll('.nav-links li').forEach(link => {
        link.classList.remove('active');
    });

    // Ativa apenas o selecionado
    document.getElementById(tabId).classList.add('active');
    const activeLink = document.getElementById('link-' + tabId);
    if (activeLink) activeLink.classList.add('active');

    // Sobe a página suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para selecionar opções no formulário (Sim/Não/Talvez)
function selectOption(button, fieldName, value) {
    const parent = button.parentElement;
    
    // Remove a cor ativa de todos os botões do grupo
    parent.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Adiciona a cor ativa no botão clicado
    button.classList.add('active');

    // Salva o valor no input escondido para o FormSubmit enviar
    const hiddenInput = parent.parentElement.querySelector(`input[name="${fieldName}"]`);
    if (hiddenInput) hiddenInput.value = value;
}

// Função para descer suavemente até o formulário
function scrollToForm() {
    document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
}
