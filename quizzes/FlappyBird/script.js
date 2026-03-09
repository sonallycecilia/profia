// BANCO DE QUESTÕES - FLAPPY BIRD (Baseado nos Manuais Parte 1 e 2)
const questions = [
    {
        question: "Qual é a função da variável 'gravidade' no código de movimentação do pássaro?",
        options: [
            "Controlar a velocidade horizontal do pássaro.",
            "Controlar a velocidade vertical do pássaro.",
            "Mudar a cor do pássaro quando ele bate no cano.",
            "Contar quantos canos o jogador ultrapassou."
        ],
        correct: 1,
        rationale: "Exato! O 'gravidade' controla a subida e a descida. Adicionamos valores a ele para o pulo e subtraímos para simular a gravidade."
    },
    {
        question: "Para que serve o bloco 'espere 0.05 seg' dentro do laço de animação das asas?",
        options: [
            "Para o jogo ficar mais difícil.",
            "Para economizar a bateria do computador.",
            "Para criar a ilusão de movimento fluido ao trocar as fantasias.",
            "Para o pássaro não voar para fora da tela."
        ],
        correct: 2,
        rationale: "Isso mesmo! Esse pequeno tempo de espera entre as fantasias é o que cria a magia da animação de voo."
    },
{
    question: "Para o pássaro não voar infinitamente ao segurar a tecla espaço, qual comando usamos para garantir apenas um pulo por clique?",
    options: [
        "O bloco 'Sempre'.",
        "O bloco 'Espere até que não tecla espaço pressionada?'.",
        "O bloco 'Adicione 10 a y'.",
        "O bloco 'Próxima fantasia'."
    ],
    correct: 1,
    rationale: "Isso mesmo! Esse bloco funciona como uma trava: o computador espera você soltar a tecla antes de permitir o próximo pulo[cite: 191, 202, 205]."
},
    {
        question: "Qual mensagem o juiz transmite quando o pássaro encosta no cano ou na borda?",
        options: [
            "game over",
            "vitoria",
            "player dead",
            "parar jogo"
        ],
        correct: 2,
        rationale: "Na mosca! A mensagem 'player dead' avisa a todos os outros atores que a partida acabou."
    },
    {
        question: "Por que usamos 'Clones' para gerar os obstáculos do jogo?",
        options: [
            "Porque os clones não podem ser tocados pelo pássaro.",
            "Para criar várias cópias automáticas usando apenas um Ator 'molde'.",
            "Porque clones fazem o pássaro voar mais rápido.",
            "Para o Score não voltar para zero."
        ],
        correct: 1,
        rationale: "Isso! Os clones funcionam como uma 'máquina de bolhas', multiplicando os desafios sem precisar criar mil atores diferentes."
    },
    {
        question: "Qual é a posição X que o cano deve atingir para o jogador ganhar um ponto (Score)?",
        options: [
            "Posição x = 0",
            "Posição x = 240",
            "Posição x = -199",
            "Posição x = 100"
        ],
        correct: 2,
        rationale: "Exatamente! Quando o cano chega em X = -199, ele ultrapassou o pássaro e o ponto é marcado"
    },
    {
        question: "Para que servem os blocos 'Se... então' no código de inclinação?",
        options: [
            "Para o pássaro não bater nos canos.",
            "Para impedir que o pássaro dê cambalhotas completas e gire sem parar.",
            "Para o pulo ser mais alto.",
            "Para as moedas aparecerem mais rápido."
        ],
        correct: 1,
        rationale: "Isso! Eles limitam o ângulo para que o movimento pareça natural e não um pião girando."
    },
    {
        question: "O que o bloco 'pare outros scripts no ator' faz ao receber a mensagem de derrota?",
        options: [
            "Reinicia o computador.",
            "Apaga todos os pontos do jogador.",
            "Congela as animações de voo e a gravidade na mesma hora.",
            "Faz o pássaro mudar de cor."
        ],
        correct: 2,
        rationale: "Exato! Ele funciona como um feitiço que interrompe qualquer movimento do pássaro no momento da batida."
    },
    {
        question: "Como o efeito de 'sumiço elegante' é feito após a derrota?",
        options: [
            "Mudando o efeito fantasma gradualmente até 100.",
            "Movendo o pássaro para trás dos canos.",
            "Diminuindo o tamanho do pássaro até zero.",
            "Mudando o cenário para uma floresta."
        ],
        correct: 0,
        rationale: "Isso mesmo! Aumentamos o efeito fantasma para que ele fique transparente antes de ser escondido."
    },
    {
        question: "No início de cada partida, para quanto devemos mudar a variável Score?",
        options: [
            "Para 1",
            "Para 10",
            "Para 0",
            "Para -1"
        ],
        correct: 2,
        rationale: "Sempre para 0! Assim o jogador começa uma chance limpa para tentar bater o recorde."
    }
];

// VARIÁVEIS DE CONTROLE
let currentQuestion = 0;
let score = 0;
let answered = false;

// ELEMENTOS
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const feedback = document.getElementById("feedback");
const progressBar = document.getElementById("progress");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

function loadQuestion() {
    answered = false;
    feedback.style.display = "none";
    nextBtn.style.display = "none";
    
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

function checkAnswer(selectedIndex, btnElement) {
    if (answered) return; 
    answered = true;

    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(b => b.disabled = true);

    if (selectedIndex === q.correct) {
        score++;
        btnElement.classList.add("correct");
        showFeedback(true, "✅ Correto! " + q.rationale);
    } else {
        btnElement.classList.add("wrong");
        buttons[q.correct].classList.add("correct");
        showFeedback(false, "❌ Errado! " + q.rationale);
    }

    nextBtn.style.display = "inline-block";
}

function showFeedback(isCorrect, text) {
    feedback.textContent = text;
    feedback.className = "feedback-area " + (isCorrect ? "success" : "error");
    feedback.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.style.display = "none";
    resultScreen.style.display = "block";
    
    document.getElementById("final-score").textContent = score + "/" + questions.length;
    const msg = document.getElementById("final-message");

    if (score === questions.length) msg.textContent = "Incrível! Você dominou a física e a lógica do Flappy Bird! 🌟🐦";
    else if (score >= 7) msg.textContent = "Muito bom! Você entende bem como o jogo funciona! 💻✨";
    else msg.textContent = "Bom esforço! Que tal revisar os manuais e tentar de novo? 🧠🎮";
}

// Iniciar
loadQuestion();