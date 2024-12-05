function enviarWpp() {
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("telefone").value;
    const ong = document.getElementById("ong").textContent; // Se necessário, pode adicionar a lógica para o endereço
    // Criar a mensagem que será enviada
    const mensagem = `Olá, ${nome}! Agradecemos imensamente por se voluntariar para a ONG ${ong}. Sua disposição em contribuir com uma causa tão importante fará toda a diferença. Em breve, entraremos em contato para compartilhar mais informações sobre as próximas etapas. Muito obrigado por se juntar a nós!`;

    // Fazer a requisição POST para a API
    fetch('http://localhost:3001/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone: phone, // Aqui você envia o número de telefone
                message: mensagem // Aqui você envia a mensagem
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Mensagem enviada com sucesso!");
            } else {
                alert("Erro ao enviar mensagem: " + data.error);
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao enviar mensagem');
        });
}