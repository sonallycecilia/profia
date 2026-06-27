// BANCO DE QUESTÕES
const questions = [
{
        question: "Qual bloco devemos usar quando o computador precisa tomar decisões?",
        options: ["Eventos", "Controle", "Aparência", "Movimento"],
        correct: 1,
        rationale: "Os blocos de 'Controle' (cor laranja), como o 'SE... ENTÃO', são usados para checar condições e decidir o que fazer."
    },
    {
        question: "O que são coordenadas?",
        options: ["É tipo um endereço", "Útil para combater o inimigo", "Da um dano especial", "Usado para dar pontos de vida"],
        correct: 0,
        rationale: "Coordenadas (X e Y) funcionam como um endereço em um mapa (Plano Cartesiano) para dizer exatamente onde o objeto está na tela."
    },
    {
        question: "O que é um ator no Scracth",
        options: ["A imagem de fundo (Cenário)", "Um personagem ou objeto programável", "O bloco que toca música", "A bandeira verde"],
        correct: 1,
        rationale: "Um Ator (ou Sprite) é qualquer objeto, animal ou pessoa que você pode animar e controlar usando blocos de código."
    },
    {
        question: "Para guardar a pontuação do jogo ou o número de vidas, o que precisamos criar?",
        options: ["Uma Fantasia", "Uma Variável", "Um Cenário", "Um Som"],
        correct: 1,
        rationale: "Variáveis são como caixinhas na memória do computador onde guardamos valores que podem mudar, como os pontos."
    },
    {
        question: "No Scratch, qual eixo controla o movimento para a Esquerda e Direita (Horizontal)?",
        options: ["Eixo Y", "Eixo X", "Eixo Z", "Rotação"],
        correct: 1,
        rationale: "O Eixo X é a linha horizontal. Para subir e descer (Vertical), usamos o Eixo Y."
    },
    {
        question: "Como um ator pode 'avisar' outro ator que o jogo acabou?",
        options: ["Mudando de cor", "Transmitindo uma Mensagem", "Girando 15 graus", "Indo para o mouse"],
        correct: 1,
        rationale: "O comando 'Transmitir' envia um sinal invisível que outros atores podem receber para reagir a um evento."
    },
    {
        question: "Para criar a animação de um personagem andando, o que devemos trocar rapidamente?",
        options: ["O Palco", "A Posição X", "O Tamanho", "A Fantasia"],
        correct: 3,
        rationale: "Trocando as fantasias (desenhos diferentes do mesmo ator) em sequência, criamos a ilusão de movimento."
    },
    {
        question: "Se a condição do bloco 'SE' for FALSA, o que o computador faz?",
        options: ["Executa o bloco 'SENÃO' (se houver) ou pula", "Trava o jogo", "Executa o 'SE' mesmo assim", "Desliga a tela"],
        correct: 0,
        rationale: "Se a condição é falsa, ele ignora o que está dentro do 'SE' e busca o 'SENÃO' ou segue para o próximo bloco."
    },
    {
        question: "Qual categoria de blocos usamos para detectar se o personagem encostou na cor vermelha?",
        options: ["Movimento", "Aparência", "Sensores", "Eventos"],
        correct: 2,
        rationale: "Os blocos de Sensores (azul claro) são os 'sentidos' do ator, usados para perceber toques, cores e teclas."
    },
    // Sugestão para completar a sua pergunta 3 que estava vazia:
    {
        question: "O que é um 'Ator' (Sprite) no Scratch?",
        options: ["O fundo da tela", "Um personagem ou objeto interativo", "O bloco de som", "A pontuação"],
        correct: 1,
        rationale: "Atores são todos os objetos que podem ter códigos, se mover e interagir no palco."
    }
]


// MENSAGENS FINAIS (usadas pelo motor ../quiz.js)
const resultMessages = {
    perfect: "Uau! Mestre Supremo da Lógica! Você acertou TUDO! 🌟",
    good: "Parabéns! Você é um ótimo Detetive de Lógica! 🕵️‍♂️",
    tryAgain: "Bom começo! Que tal tentar de novo para treinar seu cérebro? 🧠"
};
