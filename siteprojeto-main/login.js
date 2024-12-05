document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Recupera os dados do usuário armazenados no localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Verifica se o e-mail e a senha coincidem com os dados armazenados
    if (email === storedEmail && password === storedPassword) {
        alert('Login realizado com sucesso!');
        window.location.href = 'ongs.html'; // Redireciona para a página home
    } else {
        alert('E-mail ou senha incorretos. Tente novamente.');
    }
});