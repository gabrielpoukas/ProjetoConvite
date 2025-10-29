document.addEventListener('DOMContentLoaded', function() {
    const acceptBtn = document.getElementById('acceptBtn');
    const responseMessage = document.getElementById('responseMessage');
    
    // Lista de mensagens que podem aparecer após o clique.
    // Você pode personalizá-las!
    const responses = [
        "Claro que aceito, meu Amor! Que ideia maravilhosa!",
        "SIM, SIM, SIM! Mal posso esperar pelo nosso Halloween!",
        "Aceito! Coraline e A Noiva Cadáver são perfeitos para a data!",
        "Com você, eu topo qualquer filme! 💖 Aceito!"
    ];
    
    acceptBtn.addEventListener('click', function() {
        // Escolhe uma mensagem aleatória
        const randomIndex = Math.floor(Math.random() * responses.length);
        
        // 1. Esconde o botão
        acceptBtn.style.display = 'none';
        
        // 2. Revela a mensagem de resposta
        responseMessage.textContent = responses[randomIndex];
        responseMessage.classList.remove('hidden');
        
        // 3. Adiciona um pequeno toque visual (opcional)
        responseMessage.style.transition = 'opacity 1s';
        responseMessage.style.opacity = 0;
        setTimeout(() => {
            responseMessage.style.opacity = 1;
        }, 50);

        // 4. Se quiser, você pode desabilitar o clique da tela ou mudar o fundo
        // Exemplo: document.body.style.backgroundImage = 'url("confetti.gif")';
    });
});