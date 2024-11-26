function mostrarFormulario() {
    // Mostra o formulário de edição
    document.getElementById("formEdicao").style.display = "block";
}

function salvarEdicao() {
    // Atualiza as informações no cartão
    document.getElementById("nome").innerText = document.getElementById("novoNome").value;
    document.getElementById("sexo").innerText = "Sexo: " + document.getElementById("novoSexo").value;
    document.getElementById("genero").innerText = "Gênero: " + document.getElementById("novoGenero").value;
    document.getElementById("profissao").innerText = "Profissão: " + document.getElementById("novaProfissao").value;

    // Esconde o formulário após salvar
    document.getElementById("formEdicao").style.display = "none";
}

function editarFoto() {
    // Ativa o campo de upload de foto
    document.getElementById("uploadFoto").click();
}

function atualizarFoto() {
    const arquivo = document.getElementById("uploadFoto").files[0];
    const leitor = new FileReader();

    leitor.onload = function(e) {
        // Atualiza a imagem com o arquivo carregado
        document.getElementById("fotoPerfil").src = e.target.result;
    }

    if (arquivo) {
        leitor.readAsDataURL(arquivo);
    }
}
// Função para logout
function logout() {
    // Aqui você pode adicionar o código para deslogar o usuário
    alert("Você foi deslogado!");
    // Redirecionar ou limpar informações de login
    window.location.href = "login.html"; // Ou qualquer página de login
}

// Função para enviar feedback para o WhatsApp
function enviarWhatsApp() {
    const feedbackText = document.getElementById("feedbackText").value;
    if (feedbackText.trim() !== "") {
        const mensagem = encodeURIComponent(feedbackText);
        const numeroWhatsApp = "5561998755557"; // Coloque o número do WhatsApp aqui
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
        window.open(linkWhatsApp, "_blank");
    } else {
        alert("Por favor, escreva uma mensagem antes de enviar.");
    }
}