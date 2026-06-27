// ============================================================================
// MOTOR DOS QUIZZES - PROFIA (compartilhado por todos os quizzes)
// ============================================================================
// Toda a lógica do quiz vive AQUI. Cada quiz só precisa, no seu script.js:
//   1. const questions = [ { question, options, correct, rationale }, ... ]
//   2. (opcional) const resultMessages = { perfect, good, tryAgain }
//
// No index.html, carregue NESTA ORDEM (dados primeiro, motor depois):
//   <script src="script.js"></script>
//   <script src="../quiz.js"></script>
// ============================================================================

(function () {
    "use strict";

    // Mensagens padrão (usadas quando o quiz não define `resultMessages`).
    const defaultMessages = {
        perfect: "Uau! Mestre Supremo da Lógica! Você acertou TUDO! 🌟",
        good: "Parabéns! Você mandou muito bem! ✨",
        tryAgain: "Bom começo! Que tal tentar de novo para treinar seu cérebro? 🧠"
    };
    const messages = (typeof resultMessages !== "undefined")
        ? Object.assign({}, defaultMessages, resultMessages)
        : defaultMessages;

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

        if (score === questions.length) msg.textContent = messages.perfect;
        else if (score >= 7) msg.textContent = messages.good;
        else msg.textContent = messages.tryAgain;
    }

    // O botão "Próxima" usa onclick="nextQuestion()" no HTML, então expomos a função.
    window.nextQuestion = nextQuestion;

    // Iniciar
    loadQuestion();
})();
