// BANCO DE QUESTÕES - PONG GAME
const questions = [
    {
        question: "Qual a função do 'Efeito Espelho' (multiplicar a direção por -1) no jogo?",
        options: ["Parar a bola", "Inverter a direção para criar o rebote", "Aumentar a velocidade", "Mudar a cor"],
        correct: 1,
        rationale: "Multiplicar por -1 inverte o sentido da bola da esquerda para a direita ou vice-versa[cite: 19, 30]."
    },
    {
        question: "Para que serve o bloco 'espere 0.2 seg' logo após o toque na raquete?",
        options: ["Aumentar pontos", "Escudo Anti-Bug para a bola não grudar", "Mudar o cenário", "Resetar o jogo"],
        correct: 1,
        rationale: "Ele dá um tempo para a bola desgrudar da raquete, evitando que o computador ache que ela bateu mil vezes ao mesmo tempo[cite: 33, 35]."
    },
    {
        question: "No Scratch, se quisermos que a raquete suba, qual valor adicionamos ao eixo Y?",
        options: ["Número negativo", "Zero", "Número positivo (ex: 10)", "O valor de X"],
        correct: 2,
        rationale: "O eixo Y controla o movimento vertical; números positivos fazem o ator subir[cite: 206, 211]."
    },
    {
        question: "Como o 'Juiz' sabe que a bola passou da raquete da DIREITA (Gol seu)?",
        options: ["Posição X > 220", "Posição Y < -120", "Tocando na cor azul", "Posição X < -220"],
        correct: 0,
        rationale: "O limite da tela termina em 240; se X for maior que 220, a bola passou da raquete direita[cite: 66, 67]."
    },
    {
        question: "Por que a raquete do robô (IA) é mais lenta que a do jogador?",
        options: ["Erro de código", "Para o robô nunca perder", "Para ajustar a dificuldade e o jogador poder vencer", "O robô é mais pesado"],
        correct: 2,
        rationale: "Se o robô fosse muito rápido, ele nunca perderia. Ser lento garante que ele não alcance bolas velozes[cite: 346, 347]."
    },
    {
        question: "Qual bloco garante que o computador verifique o golo ou as teclas 'o tempo todo'?",
        options: ["Mova 10 passos", "Sempre", "Se tocar na borda", "Aponte para 90"],
        correct: 1,
        rationale: "O bloco 'Sempre' funciona como um motor que nunca desliga, vigiando o jogo sem piscar[cite: 74, 144]."
    },
    {
        question: "No sorteio do saque, por que usamos ângulos como 60 ou 120?",
        options: ["Para a bola ir reto", "Para a bola andar na diagonal", "Para a bola girar", "Para a bola parar"],
        correct: 1,
        rationale: "Ângulos quebrados forçam a bolinha a andar na diagonal, tornando o jogo menos previsível[cite: 276]."
    },
    {
        question: "O que acontece com a 'ball_speed' logo após um gol?",
        options: ["Aumenta para 20", "Fica em zero", "Volta para a velocidade inicial (5)", "A bola desaparece"],
        correct: 2,
        rationale: "Resetar a velocidade para 5 impede que o próximo saque comece rápido demais e seja impossível de defender[cite: 86, 87]."
    },
    {
        question: "No modo multijogador (Co-op), quais teclas o Jogador 2 usa?",
        options: ["W e S", "Espaço", "Setas para Cima e para Baixo", "Mouse"],
        correct: 2,
        rationale: "Enquanto o Jogador 1 usa W e S, o Jogador 2 utiliza as setas do teclado[cite: 93, 98]."
    },
    {
        question: "Para que serve a variável 'ball_posY' no código do Robô (IA)?",
        options: ["Contar pontos", "Mudar a cor da bola", "GPS para a raquete perseguir a altura da bola", "Marcar o tempo"],
        correct: 2,
        rationale: "O robô compara sua própria posição Y com a 'ball_posY' para saber se deve subir ou descer[cite: 318, 335]."
    }
];


// MENSAGENS FINAIS (usadas pelo motor ../quiz.js)
const resultMessages = {
    perfect: "Uau! Você é um Desenvolvedor de Jogos Pro! 🚀",
    good: "Parabéns! Sua lógica de jogo está muito forte! 🏓",
    tryAgain: "Bom esforço! Que tal revisar os sensores e tentar de novo? 🧠"
};
