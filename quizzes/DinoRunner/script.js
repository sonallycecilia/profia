// BANCO DE QUESTÕES - DINO RUNNER (Baseado nos Manuais Parte 1 e 2)
const questions = [
    {
        question: "Qual é a principal vantagem de usar os 'Blocos Cor-de-Rosa' (Meus Blocos) no Scratch?",
        options: [
            "Deixar o jogo mais rápido e sem travamentos.",
            "Mudar a cor do dinossauro durante a corrida.",
            "Organizar o código e reaproveitar comandos, como criar um botão de 'Golpe Especial'.",
            "Fazer o chão do cenário rolar infinitamente."
        ],
        correct: 2,
        rationale: "Isso mesmo! Eles ajudam a arrumar a bagunça da tela e evitam que você precise copiar e colar os mesmos blocos várias vezes."
    },
    {
        question: "Como o truque visual do 'Chão Infinito' funciona no Dino Runner?",
        options: [
            "O dinossauro anda para a direita enquanto o chão fica parado.",
            "O chão vai para a esquerda e, ao chegar no limite, é multiplicado por -1 para se teletransportar para o outro lado.",
            "Criamos 100 atores de chão diferentes e colocamos um do lado do outro.",
            "O cenário de fundo gira em um círculo 3D."
        ],
        correct: 1,
        rationale: "Exato! O bloco Scroll puxa o chão para trás e a mágica matemática teleporta ele de volta para o começo, criando um ciclo sem fim."
    },
    {
        question: "Qual é a função da variável 'Velocidade do Pulo'?",
        options: [
            "Controlar a velocidade que o cacto anda na tela.",
            "Lembrar o computador se o personagem está subindo (positivo) ou caindo (negativo).",
            "Contar quantos pontos o jogador já fez.",
            "Mudar o tamanho do dinossauro."
        ],
        correct: 1,
        rationale: "Perfeito! A velocidade do pulo controla a física do pulo, adicionando força para subir ou subtraindo (-1) para simular a gravidade puxando para baixo."
    },
    {
        question: "Para que serve o bloco 'número aleatório entre 0.5 e 1.8 seg' na Fábrica de Clones?",
        options: [
            "Para definir o tamanho do dinossauro.",
            "Para fazer os cactos aparecerem sempre na mesma distância.",
            "Para criar um tempo surpresa, garantindo que os inimigos não apareçam num ritmo chato e previsível.",
            "Para mudar a música do jogo aleatoriamente."
        ],
        correct: 2,
        rationale: "Exatamente! Isso deixa o jogo muito mais divertido e desafiador, pois você nunca sabe quando o próximo obstáculo virá."
    },
    {
        question: "O que acontece visualmente com o Dinossauro no exato momento em que o Radar de Colisão detecta que ele bateu no cacto?",
        options: [
            "Ele fica invisível usando o efeito fantasma.",
            "Ele mostra a tela de derrota",
            "Ele volta para o início da tela piscando em vermelho.",
            "Ele explode em vários clones menores."
        ],
        correct: 1,
        rationale: "Perfeito! Quando o radar avisa da batida, o código automaticamente muda a fantasia do Dino para 'Scared'[cite: 62, 69], deixando claro para o jogador que foi Game Over."
    },
    {
        question: "Como a 'Fábrica' consegue criar inimigos diferentes (cactos, passarinhos, monstros) usando o mesmo código?",
        options: [
            "Porque o jogador escolhe o inimigo no menu.",
            "Porque o clone escolhe uma fantasia aleatória de 1 a 5 logo que aparece na tela.",
            "Criando 5 fábricas diferentes, uma para cada inimigo.",
            "Usando o bloco de 'Mude o efeito cor'."
        ],
        correct: 1,
        rationale: "Na mosca! O Guarda-Roupa Surpresa sorteia a aparência do inimigo assim que ele nasce no canto direito."
    },
    {
        question: "O que o clone do inimigo faz enquanto atravessa a tela para criar o efeito de que está respirando ou quicando?",
        options: [
            "Ele gira 15 graus sem parar.",
            "Ele troca de cor a cada passo.",
            "Ele infla o tamanho para 150% e murcha para 50% bem rápido.",
            "Ele toca um som de batida de coração."
        ],
        correct: 2,
        rationale: "Isso! Essa mudança de tamanho constante cria uma animação muito legal e dinâmica para o obstáculo."
    },
    {
        question: "Por que usamos um bloco 'espere 0.01 seg' antes de ligar o Radar de Colisão no início do jogo?",
        options: [
            "Para dar um tempinho pro jogo carregar tudo e evitar que o Dino perca logo no primeiro milissegundo.",
            "Para o dinossauro dar um pulo automático.",
            "Para esperar o jogador apertar a bandeira verde.",
            "Para atrasar a música."
        ],
        correct: 0,
        rationale: "Certinho! É uma pausa rápida de segurança para garantir que a tela esteja limpa antes do detector de espinhos começar a vigiar."
    },
    {
        question: "O que o bloco 'pare outros scripts no ator' faz quando o jogo emite o aviso de Game Over?",
        options: [
            "Apaga a variável de pontos.",
            "Ele atua como um Freio de Emergência, parando a animação de corrida e desligando a fábrica de clones.",
            "Faz o dinossauro sumir da tela.",
            "Reinicia a partida automaticamente."
        ],
        correct: 1,
        rationale: "Isso mesmo! Ele congela tudo na mesma hora, parando a esteira rolante e a produção de novos inimigos."
    },
    {
        question: "O que acontece com um clone de inimigo quando ele finalmente chega no limite esquerdo da tela (posição X < -260)?",
        options: [
            "Ele vira um dinossauro.",
            "Ele volta para o começo da tela.",
            "Ele dá um ponto ao jogador e fica escondido.",
            "Ele é apagado usando o bloco 'apague este clone' para não travar o computador."
        ],
        correct: 3,
        rationale: "Exato! Um jogo bem feito precisa saber limpar a bagunça para não sobrecarregar a memória do computador."
    },
    {
        question: "Como o código sabe que o dinossauro aterrissou e pode pular de novo?",
        options: [
            "Ele verifica se a posição 'Y' é igual à variável 'Linha do Chão' (Linha do Chão).",
            "Ele espera 2 segundos após cada pulo.",
            "Ele usa o radar para detectar se tocou no cacto.",
            "Ele confere se a tecla espaço foi solta."
        ],
        correct: 0,
        rationale: "Perfeito! A variável Starting Y Pos guarda a altura exata do piso. Quando o Dino atinge essa linha, a velocidade zera e o pulo é liberado."
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

    if (score === questions.length) msg.textContent = "Incrível! Você dominou a física e os clones do Dino Runner! 🌟🦖";
    else if (score >= 7) msg.textContent = "Muito bom! Você entende bem como a corrida funciona! 💻✨";
    else msg.textContent = "Bom esforço! Que tal revisar os blocos rosas e a física e tentar de novo? 🧠🌵";
}

// Iniciar
loadQuestion();