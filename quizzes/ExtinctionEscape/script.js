// BANCO DE QUESTÕES - EXTINCTION ESCAPE
const questions = [
    {
        question: "No Scratch, todo jogo precisa de um 'sinal de largada' para começar a funcionar. Qual é o bloco que funciona como o apito do juiz no Extinction Escape?",
        options: [
            "O bloco laranja 'Mude pontos para 0'.",
            "O bloco amarelo com a Bandeira Verde.",
            "O bloco azul 'Vá para posição aleatória'.",
            "O botão do mouse."
        ],
        correct: 1,
        rationale: "Isso aí! A Bandeira Verde é como o juiz apitando o início da partida. Sem ela, os personagens ficam dormindo!"
    },
    {
        question: "O Dino obedece a um 'volante' invisível, podendo ir na diagonal. O que você precisa fazer para que o computador saiba para onde o Dino deve ir?",
        options: [
            "Gritar a direção no microfone.",
            "Usar as setinhas do teclado, duas ao mesmo tempo.",
            "Usar as setinhas do teclado, uma por vez.",
            "Ele anda sozinho sem a gente mandar."
        ],
        correct: 1,
        rationale: "Exato! Segurar duas setas ao mesmo tempo é como dirigir um carro: uma seta para frente e outra para a direita, e o Dino vai para a diagonal!"
    },
    {
        question: "O Meteoro nunca cansa! Ele persegue o Dino o jogo inteirinho. Na programação, que bloco a gente usa para mandar o computador repetir algo sem parar nunca?",
        options: [
            "O bloco 'Espere 1 segundo'.",
            "O bloco 'Sempre' (Loop).",
            "O bloco 'Esconda'.",
            "O bloco 'Próxima fantasia'."
        ],
        correct: 1,
        rationale: "Na mosca! Na programação chamamos isso de 'Loop'. É como um disco arranhado que repete a mesma música infinitamente."
    },
    {
        question: "Na vida real, a regra é: 'SE chover, ENTÃO eu levo o guarda-chuva'. No jogo, qual é a regra do bloco 'SE tocando no meteoro, ENTÃO...'?",
        options: [
            "ENTÃO o jogador ganha uma maçã dourada.",
            "ENTÃO o Dino fica invisível.",
            "ENTÃO o Dino perde vida!",
            "ENTÃO o jogo acaba na hora."
        ],
        correct: 2,
        rationale: "Exatamente! O computador fica o tempo todo perguntando: 'Encostou? Encostou?'. Quando encosta, ele aplica a regra de tirar uma vida."
    },
    {
        question: "Para a Maçã Dourada aparecer, o computador precisa saber que você já pegou 3 maçãs normais. Como o computador lembra disso? Ele usa uma 'caixinha mágica' chamada...",
        options: [
            "Variável.",
            "Fantasia.",
            "Cenário.",
            "Posição."
        ],
        correct: 0,
        rationale: "Isso mesmo! Uma variável é como uma gaveta com uma etiqueta (tipo 'qtd_maça') onde o computador guarda um número para não esquecer."
    },
    {
        question: "As maçãs usam um superpoder chamado 'Vá para posição aleatória'. O que isso significa no mundo da programação?",
        options: [
            "Que a maçã vai correr atrás do Dino.",
            "Que a maçã vai aparecer num lugar surpresa a cada vez.",
            "Que a maçã vai sempre para o meio da tela.",
            "Que a maçã vai ficar invisível para sempre."
        ],
        correct: 1,
        rationale: "Acertou! O computador sorteia dois números (como num mapa do tesouro) e joga a maçã num lugar que nem o criador do jogo sabe!"
    },
    {
        question: "O Dino parece que está se mexendo de verdade na tela! Que truque de cinema o Scratch usa para fazer essa animação?",
        options: [
            "Tocar uma música de fundo bem rápida.",
            "O bloco 'Próxima Fantasia'.",
            "Girar o personagem de cabeça para baixo.",
            "O bloco 'Mova 10 passos'."
        ],
        correct: 1,
        rationale: "Isso mesmo! Trocar a 'fantasia' (o desenho) bem rápido faz parecer que ele está vivo e batendo as perninhas ou asas!"
    },
    {
        question: "O item de Escudo usa um truque de MATEMÁTICA muito esperto para proteger o Dino. Como ele faz o Dino não perder vida?",
        options: [
            "Ele muda a variável 'dano' para zero!",
            "Ele multiplica as vidas por 1000.",
            "Ele transforma o Meteoro numa maçã.",
            "Ele faz o computador desligar o jogo."
        ],
        correct: 0,
        rationale: "Genial! Se o dano é zero, quando o Meteoro bate no Dino o computador faz a conta 'Vidas menos Zero', e a vida continua igualzinha!"
    },
    {
        question: "Os personagens podem 'conversar' entre si no Scratch usando uma espécie de rádio invisível. Que poder especial o escudo ativa enviando uma mensagem para o Dino?",
        options: [
            "A mensagem secreta 'Dino, corra!'.",
            "O poder de pular.",
            "A mensagem 'Escudo ativo' (Transmissão/Broadcast).",
            "Um pedido de pizza."
        ],
        correct: 2,
        rationale: "Exato! Quando o item de proteção encosta no Dino, ele grita no rádio 'Escudo ativo!', e o Dino escuta e liga a defesa dele."
    },
    {
        question: "Chegou a temida hora do 'Game Over' (Fim de Jogo). Quem é o juiz responsável por olhar a quantidade de vidas e mostrar a tela de derrota?",
        options: [
            "A Maçã Dourada.",
            "O próprio jogador.",
            "O Meteoro!",
            "A Bandeira Verde."
        ],
        correct: 2,
        rationale: "Isso mesmo! O código do Meteoro fica vigiando: 'SE vidas for menor que 1, então mude o cenário para a Tela Derrota'. Ele é o grande vilão!"
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
        finalMessage.textContent = "Uau! Mestre Supremo do Scratch! Você gabaritou tudo! 🌟🦖";
    } else if (score >= 7) {
        finalMessage.textContent = "Parabéns! Você é um ótimo Programador Mirim! 💻✨";
    } else {
        finalMessage.textContent = "Bom começo! Que tal tentar de novo para treinar seu cérebro de programador? 🧠🎮";
    }
}

// INICIALIZAÇÃO
loadQuestion();