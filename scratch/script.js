// Aguarda o carregamento total da página
document.addEventListener('DOMContentLoaded', () => {
    console.log("Central de Missões carregada com sucesso! 🚀");

    // Seleciona todos os botões que estão dentro de cards bloqueados
    const lockedButtons = document.querySelectorAll('.locked-btn');

    // Adiciona um evento de clique para cada botão bloqueado
    lockedButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Previne que o link tente abrir qualquer coisa
            event.preventDefault();
            
            // Mostra um aviso amigável
            alert("🚧 Calma, apressadinho(a)! Essa missão ainda está sendo construída. Tente a próxima! 🚧");
        });
    });

    // EFEITO EXTRA: Animação suave ao passar o mouse nos cards
    const cards = document.querySelectorAll('.mission-card:not(.locked)');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Se quiser adicionar som de 'hover' no futuro, seria aqui!
            // console.log("Mouse sobre o card: " + card.querySelector('h2').innerText);
        });
    });
});