// BANCO DE QUESTÕES
const questions = [
    {
        question: "O que o robô precisa fazer PRIMEIRO antes de decidir?",
        options: ["Sair correndo", "Dormir um pouco", "Perceber (usar sensores)", "Escolher uma ação"],
        correct: 2,
        rationale: "Isso aí! Primeiro usamos os 'olhos' e 'ouvidos' (sensores) para saber o que está acontecendo."
    },
    {
        question: "Se você vê um buraco no chão, qual parte da decisão é essa?",
        options: ["Percepção (Ver)", "Análise (Pensar)", "Escolha (Agir)", "Sorte"],
        correct: 0,
        rationale: "Exato! Percepção é usar os sentidos para notar algo no ambiente."
    },
    {
        question: "Depois de ver o buraco, você pensa: 'Se eu pisar, caio'. Isso é...",
        options: ["Mágica", "Análise (Pensar)", "Escolha (Agir)", "Um Erro"],
        correct: 1,
        rationale: "Muito bem! Você consultou uma regra de segurança na sua cabeça."
    },
    {
        question: "Quando você decide PULAR o buraco, isso é...",
        options: ["Uma Dúvida", "A Percepção", "A Escolha (Ação)", "O Pensamento"],
        correct: 2,
        rationale: "Correto! A Escolha é a execução física da decisão que você tomou."
    },
    {
        question: "No Scratch, qual bloco usamos para o computador ANALISAR uma regra?",
        options: ["Mova 10 passos", "Toque o som Miau", "SE ... ENTÃO", "Bandeira Verde"],
        correct: 2,
        rationale: "Isso mesmo! O bloco amarelo 'SE' serve para verificar se uma condição é verdadeira."
    },
    {
        question: "Se um robô não tiver câmera nem sensores, o que ele NÃO consegue fazer?",
        options: ["Perceber o mundo", "Gastar bateria", "Ser desligado", "Ficar parado"],
        correct: 0,
        rationale: "Sem sensores, ele é como se fosse 'cego', então não consegue perceber nada."
    },
    {
        question: "Qual é a ordem correta para não fazer bobagem?",
        options: ["Escolher -> Perceber", "Perceber -> Analisar -> Escolher", "Analisar -> Perceber", "Pular -> Pensar"],
        correct: 1,
        rationale: "Primeiro vejo (Percebo), depois penso (Analiso), por fim faço (Escolho)."
    },
    {
        question: "O que são as 'regras' na criação de um mundo?",
        options: ["As cores do desenho", "O nome do jogo", "Os efeitos sonoros", "Leis de 'Causa e Efeito'"],
        correct: 3,
        rationale: "Regras definem: SE acontecer isso, ENTÃO aquilo acontece. Como leis da física!"
    },
    {
        question: "Se a regra é 'SE tocar no AZUL, pule', mas o chão é VERMELHO. O robô pula?",
        options: ["Sim, ele pula", "Não, ele não faz nada", "Talvez", "Ele explode"],
        correct: 1,
        rationale: "O computador é exato. Se a regra diz Azul e o chão é Vermelho, ele ignora!"
    }
];


// MENSAGENS FINAIS (usadas pelo motor ../quiz.js)
const resultMessages = {
    perfect: "Uau! Mestre Supremo da Lógica! Você acertou TUDO! 🌟",
    good: "Parabéns! Você é um ótimo Detetive de Lógica! 🕵️‍♂️",
    tryAgain: "Bom começo! Que tal tentar de novo para treinar seu cérebro? 🧠"
};
