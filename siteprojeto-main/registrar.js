document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Verificação simples para garantir que todos os campos foram preenchidos
    if (!name || !email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Salva os dados do usuário no localStorage
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Conta criada com sucesso!');
    window.location.href = 'login.html'; // Redireciona para a página home
});