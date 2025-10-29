document.addEventListener('DOMContentLoaded', function() {
    const acceptBtn = document.getElementById('acceptBtn');
    const responseMessage = document.getElementById('responseMessage');
    
    const responses = [
        "Claro que aceito, meu Amor! Que ideia maravilhosa!",
        "SIM, SIM, SIM! Mal posso esperar pelo nosso Halloween!",
        "Aceito! Coraline e A Noiva Cadáver são perfeitos para a data!",
        "Com você, eu topo qualquer filme! 💖 Aceito!"
    ];
    
    acceptBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * responses.length);
        
        acceptBtn.style.display = 'none';
        
        responseMessage.textContent = responses[randomIndex];
        responseMessage.classList.remove('hidden');
        
        responseMessage.style.transition = 'opacity 1s';
        responseMessage.style.opacity = 0;
        setTimeout(() => {
            responseMessage.style.opacity = 1;
        }, 50);

        
    });
});