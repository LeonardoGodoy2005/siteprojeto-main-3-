document.getElementById("voluntarioForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário, permitindo validação

    // Obtendo os valores dos campos
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const ong = document.getElementById("ong").value;

    // Validação simples
    if (nome && cpf && email && telefone && endereco && ong) {
        alert("Formulário enviado com sucesso!");

        // Resetando o formulário após o envio
        document.getElementById("voluntarioForm").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
// Máscara para CPF: 000.000.000-00
function mascaraCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Aplica a máscara
    return cpf;
}

// Máscara para Número de Celular: (55) 00 000000000
function mascaraTelefone(telefone) {
    telefone = telefone.replace(/\D/g, ''); // Remove caracteres não numéricos
    telefone = telefone.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2 $3-$4'); // Aplica a máscara
    return telefone;
}

// Aplica as máscaras nos campos de CPF e Telefone
document.getElementById("cpf").addEventListener("input", function(e) {
    this.value = mascaraCPF(this.value);
});

document.getElementById("telefone").addEventListener("input", function(e) {
    this.value = mascaraTelefone(this.value);
});