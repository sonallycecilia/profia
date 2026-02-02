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