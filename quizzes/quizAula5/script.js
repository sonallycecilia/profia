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

// VARIÁVEIS DE CONTROLE
let currentQuestion = 0;
let score = 0;
let answered = false;

// ELEMENTOS DO DOM
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const feedback = document.getElementById("feedback");
const progressBar = document.getElementById("progress");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

// FUNÇÃO: CARREGAR PERGUNTA
function loadQuestion() {
    answered = false;
    feedback.style.display = "none";
    nextBtn.style.display = "none";
    
    // Atualiza barra de progresso
    const progressPercent = (currentQuestion / questions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    const q = questions[currentQuestion];
    questionText.textContent = (currentQuestion + 1) + ". " + q.question;
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

// FUNÇÃO: VERIFICAR RESPOSTA
function checkAnswer(selectedIndex, btnElement) {
    if (answered) return; 
    answered = true;

    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll(".option-btn");

    // Bloqueia cliques extras
    buttons.forEach(b => b.disabled = true);

    if (selectedIndex === q.correct) {
        score++;
        btnElement.classList.add("correct");
        showFeedback(true, "✅ " + q.rationale);
    } else {
        btnElement.classList.add("wrong");
        // Destaca a correta
        buttons[q.correct].classList.add("correct");
        showFeedback(false, "❌ Ops! " + q.rationale);
    }

    nextBtn.style.display = "inline-block";
}

// FUNÇÃO: MOSTRAR FEEDBACK
function showFeedback(isCorrect, text) {
    feedback.textContent = text;
    feedback.className = "feedback-area " + (isCorrect ? "success" : "error");
    feedback.style.display = "block";
}

// FUNÇÃO: PRÓXIMA PERGUNTA
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// FUNÇÃO: TELA FINAL
function showResults() {
    quizScreen.style.display = "none";
    resultScreen.style.display = "block";
    
    const finalScoreElement = document.getElementById("final-score");
    const finalMessage = document.getElementById("final-message");
    
    finalScoreElement.textContent = score + "/" + questions.length;

    // Mensagens personalizadas baseadas na nota
    if (score === questions.length) {
        finalMessage.textContent = "Uau! Mestre Supremo da Lógica! Você acertou TUDO! 🌟";
    } else if (score >= 7) {
        finalMessage.textContent = "Parabéns! Você é um ótimo Detetive de Lógica! 🕵️‍♂️";
    } else {
        finalMessage.textContent = "Bom começo! Que tal tentar de novo para treinar seu cérebro? 🧠";
    }
}

// INICIALIZAÇÃO
loadQuestion();