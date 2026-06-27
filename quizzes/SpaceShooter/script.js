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


// MENSAGENS FINAIS (usadas pelo motor ../quiz.js)
const resultMessages = {
    perfect: "Uau! Mestre Supremo da Lógica! Você acertou TUDO! 🌟",
    good: "Parabéns! Você é um ótimo Detetive de Lógica! 🕵️‍♂️",
    tryAgain: "Bom começo! Que tal tentar de novo para treinar seu cérebro? 🧠"
};
