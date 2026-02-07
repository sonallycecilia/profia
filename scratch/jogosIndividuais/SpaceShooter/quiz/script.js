// BANCO DE QUESTÕES
const questions = [
            {
                question: "O meteoro cai para baixo. Para fazer ele cair, a gente muda o Y (altura) por qual tipo de número?",
                options: ["Um número positivo (tipo 10)", "Um número negativo (tipo -10)", "O número zero", "Uma letra"],
                correct: 1,
                rationale: "O sinal de menos (-) faz as coisas descerem na tela do Scratch."
            },
            {
                question: "O Chefe usa um bloco 'número aleatório'. O que isso significa?",
                options: ["Que ele sempre vai para o mesmo lugar", "Que ele escolhe um lugar surpresa, que a gente não sabe qual é!", "Que ele vai dormir", "Que ele vai ficar invisível"],
                correct: 1,
                rationale: "Aleatório é como jogar um dado: é sempre uma surpresa e deixa o jogo mais divertido!"
            },
            {
                question: "O bloco 'Sempre' (o que parece uma boca de jacaré) serve para quê?",
                options: ["Para repetir a mesma coisa sem parar", "Para fazer só uma vez", "Para apagar o jogo", "Para mudar a música"],
                correct: 0,
                rationale: "Ele repete o código infinitamente até o jogo acabar."
            },
            {
                question: "Quando o meteoro explode, ele muda de roupa para parecer uma explosão. Como chamamos essa 'roupa' no Scratch?",
                options: ["Pijama", "Fantasia (Costume)", "Máscara", "Tinta"],
                correct: 1,
                rationale: "Cada desenho diferente do mesmo personagem no Scratch é chamado de Fantasia."
            },
            {
                question: "O bloco 'Se... Então' funciona como o quê?",
                options: ["Como um detetive fazendo uma pergunta", "Como um carro de corrida", "Como uma borracha", "Como um pincel"],
                correct: 0,
                rationale: "Ele verifica uma pista (condição): 'SE algo acontecer, ENTÃO faça isso!'."
            },
            {
                question: "O que é um 'Clone' no jogo?",
                options: ["Um monstro assustador", "Uma cópia exata do personagem", "O nome da nave", "Um tipo de doce"],
                correct: 1,
                rationale: "Usamos clones para criar muitos meteoros iguais sem precisar desenhar um por um."
            },
            {
                question: "Por que o jogo fica mais difícil na Fase 2?",
                options: ["Porque a tela muda de cor", "Porque mudamos a velocidade para um número maior", "Porque o computador cansou", "Porque a nave fica menor"],
                correct: 1,
                rationale: "A variável de velocidade aumenta, fazendo os inimigos correrem mais rápido."
            },
            {
                question: "O bloco 'Esconda' faz o personagem ficar invisível. Quando usamos o bloco 'Mostre'?",
                options: ["Quando queremos que ele suma", "Quando queremos que ele apareça de novo na tela", "Quando queremos tocar um som", "Quando queremos salvar o jogo"],
                correct: 1,
                rationale: "O 'Mostre' traz o personagem de volta para o jogo."
            },
            {
                question: "Para a nave não sair voando para fora da tela e sumir, usamos qual regra?",
                options: ["Se tocar na borda, pare ou volte", "Se tocar na borda, exploda", "Se tocar na borda, ganhe pontos", "Se tocar na borda, durma"],
                correct: 0,
                rationale: "A borda é o limite do nosso jogo, como as paredes de uma sala."
            },
            {
                question: "Qual é o objetivo principal do jogo?",
                options: ["Fazer carinho nos meteoros", "Sobreviver e fazer muitos pontos", "Ficar parado sem fazer nada", "Desenhar uma flor"],
                correct: 1,
                rationale: "Desviar dos inimigos, acertar os alvos e tentar bater o recorde!"
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