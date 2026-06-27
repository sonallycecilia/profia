# Profia — Guias de Estudo e Quizzes

Material do curso de programação (Scratch e jogos) da **Profia**. O projeto reúne:

- **Guias de estudo**: apostilas em HTML, formatadas em folha A4 para impressão.
- **Quizzes interativos**: construídos em HTML e JavaScript.
- **Central de Missões** (`index.html`): página inicial que reúne os links dos quizzes.

O projeto é composto apenas por HTML, CSS e JavaScript, sem dependências externas.
Não há etapa de build: basta abrir os arquivos no navegador ou editá-los no VS Code.

---

## Estrutura de pastas

```
profia/
├── index.html                      → Central de Missões (página inicial)
├── css/style.css                   → estilo único usado por todos os guias
├── script.js                       → script da página inicial
│
├── guias/                          → todos os guias de estudo em HTML
│   ├── template/
│   │   ├── modelo-guia.html        → modelo para criar um guia novo
│   │   └── template_sinddy.html
│   │
│   ├── pensamento computacional/
│   │   └── overcooked+pc.html
│   │
│   └── scratch/
│       ├── assets/                 → imagens compartilhadas (logo, mascote, blocos)
│       ├── aulas/                  → guias das aulas (aula0 a aula6)
│       └── jogosIndividuais/       → guias passo a passo de cada jogo
│           ├── DinoRunner/         → parte1.html, parte2.html, ... + assets/ do jogo
│           ├── FlappyBird/
│           ├── Pong/
│           └── SpaceShooter/
│
└── quizzes/                        → quizzes interativos (ver seção "Quizzes")
    ├── style.css                   → estilo único de todos os quizzes
    ├── quiz.js                     → motor único (lógica compartilhada)
    └── <Jogo>/                     → uma pasta por quiz: index.html + script.js (dados)
```

**Regra de imagens:** imagens usadas por **vários** guias ficam em
`guias/scratch/assets/`. Imagens de **um único jogo** ficam na pasta `assets/` ao
lado daquele jogo (por exemplo, `guias/scratch/jogosIndividuais/Pong/assets/`).

---

## Como visualizar um guia

**Abrir o arquivo diretamente:** abra o arquivo `.html` no navegador. Funciona
porque todos os caminhos são relativos.

**Live Server (recomendado para edição):** no VS Code, instale a extensão
*Live Server*, clique com o botão direito no arquivo `.html` e selecione
*Open with Live Server*. A página recarrega automaticamente a cada alteração salva.

**Gerar PDF ou imprimir:** abra o guia no navegador e use `Ctrl+P` →
*Salvar como PDF*. O CSS já está preparado para o formato A4 (cada
`<div class="page">` corresponde a uma folha).

---

## A regra dos caminhos

Os caminhos para o CSS e para as imagens são **relativos**, usando `../` para
subir um nível de pasta. A quantidade de `../` depende de **quantas pastas o
arquivo está abaixo da raiz** (`profia/`):

| Onde está o arquivo                              | Níveis | Caminho do CSS              |
|--------------------------------------------------|:------:|-----------------------------|
| `guias/template/modelo-guia.html`                |   2    | `../../css/style.css`       |
| `guias/pensamento computacional/overcooked+pc.html` | 2   | `../../css/style.css`       |
| `quizzes/DinoRunner/index.html`                  |   2    | `../style.css` (CSS dos quizzes) |
| `guias/scratch/aulas/aula1/aula1.html`           |   4    | `../../../../css/style.css` |
| `guias/scratch/jogosIndividuais/Pong/parte1.html` |  4    | `../../../../css/style.css` |

As imagens compartilhadas ficam **dentro** de `guias/scratch/assets/`. Como as
aulas e os jogos também estão dentro de `guias/scratch/`, o caminho até elas é
mais curto: a partir de uma aula (`guias/scratch/aulas/aulaN/`) use
`../../assets/logo-profia.png` (sobe até `guias/scratch/` e entra em `assets/`).

> **Não utilize caminhos absolutos** (iniciados com `/`, como `/css/style.css`).
> Eles funcionam apenas no Live Server e quebram ao abrir o arquivo diretamente
> e no GitHub Pages. Utilize sempre caminhos relativos com `../`.

---

## Como criar um guia novo

1. **Copie o modelo:** duplique `guias/template/modelo-guia.html` para a pasta de
   destino (por exemplo, `guias/scratch/aulas/aula7/aula7.html`).
2. **Ajuste os `../`:** o modelo está dois níveis abaixo da raiz (`../../`). Ao
   movê-lo quatro níveis abaixo, substitua o `../../` do CSS por `../../../../`
   (consulte a tabela acima). Faça o ajuste no `<link>` do CSS e em todas as
   imagens.
3. **Substitua o conteúdo:** título, textos, passos e imagens. Remova os blocos
   que não forem utilizados.
4. **Imagens do guia:** se forem exclusivas desse guia, crie uma pasta `assets/`
   ao lado e referencie com `./assets/nome.png`.
5. **Revise no navegador** antes de compartilhar.

---

## Catálogo de classes do CSS (`css/style.css`)

Utilize as classes prontas a seguir para manter a identidade visual consistente
entre os guias. Não inclua estilos diretamente no HTML; ajuste o `style.css`
quando for necessário alterar a aparência de todos os guias de uma vez.

### Estrutura da página
| Classe          | Para que serve                                              |
|-----------------|-------------------------------------------------------------|
| `.page`         | Uma folha A4. Cada `<div class="page">` vira 1 página.      |
| `.header`       | Cabeçalho com a logo (use `img.mascot` e `img.logotype`).  |
| `.two-columns` + `.col` | Duas colunas lado a lado (comparações).            |
| `.page-number`  | Número da página no rodapé.                                 |

### Capa
| Classe                | Para que serve                                       |
|-----------------------|------------------------------------------------------|
| `.cover-main-title`   | Título grande da capa (`<span>` interno fica ciano). |
| `.cover-subtitle-pro` | Subtítulo da capa.                                   |
| `.cover-banner`       | Moldura da imagem de capa.                           |

### Conteúdo
| Classe          | Para que serve                                              |
|-----------------|-------------------------------------------------------------|
| `.concept-box` + `.concept-title` | Caixa roxa de conceito/definição.       |
| `.note`         | Caixa laranja de dica/aviso.                                |
| `.step-list`    | Lista `<ul>` que numera os `<li>` automaticamente (bolinhas).|
| `.code-block` + `.code-title` | Bloco que simula código/blocos do Scratch.   |

### Cores de código (dentro de `.code-block`)
| Classe      | Cor      | Use para                          |
|-------------|----------|-----------------------------------|
| `.keyword`  | rosa     | comandos de controle (quando, sempre, se) |
| `.object`   | azul     | objetos/sprites                   |
| `.action`   | verde    | ações (mova, mude, toque)         |
| `.value`    | laranja  | números e valores                 |

### Atividades e impressão
| Classe          | Para que serve                                              |
|-----------------|-------------------------------------------------------------|
| `.notes-area`   | Área pautada para o aluno escrever à mão.                   |
| `.feedback-area`| Caixa tracejada para resposta/feedback.                    |
| `.key-group` + `.key` | Representa teclas do teclado (setas, etc).           |
| `.score-container` + `.score-box` + `.score-input` | Quadro de pontuação. |

### Página inicial (Central de Missões)
`.hub-header`, `.hub-subtitle`, `.missions-grid`, `.mission-card`,
`.level-tag`, `.card-icon` e `.play-btn` — utilizadas apenas no `index.html`.

---

## Quizzes (arquitetura compartilhada)

Todos os quizzes compartilham a mesma lógica e o mesmo estilo, concentrados em
dois arquivos únicos. Cada quiz armazena apenas o seu próprio conteúdo:

| Arquivo                    | Descrição                                            |
|----------------------------|------------------------------------------------------|
| `quizzes/style.css`        | Estilo de todos os quizzes.                          |
| `quizzes/quiz.js`          | Motor: carrega perguntas, corrige respostas, exibe feedback, barra de progresso e tela final. Não deve ser alterado para mudar conteúdo. |
| `quizzes/<Jogo>/script.js` | Apenas os dados do quiz: perguntas e mensagens finais. |
| `quizzes/<Jogo>/index.html`| Página do quiz (estrutura fixa).                     |

### Como criar um quiz novo

1. Copie uma pasta existente (por exemplo, `quizzes/DinoRunner/`) com outro nome.
2. No `index.html`, ajuste apenas o título, o ícone e o cabeçalho. Mantenha, ao
   final do arquivo, os scripts **nesta ordem** (dados primeiro, motor depois):
   ```html
   <script src="script.js"></script>
   <script src="../quiz.js"></script>
   ```
3. No `script.js`, substitua o conteúdo. O arquivo contém apenas dois elementos:
   ```js
   const questions = [
       {
           question: "Pergunta?",
           options: ["A", "B", "C", "D"],
           correct: 2,                 // índice da resposta certa (começa em 0)
           rationale: "Explicação exibida no feedback."
       },
       // demais perguntas
   ];

   const resultMessages = {
       perfect:  "Mensagem para acerto total.",
       good:     "Mensagem para boa pontuação (acertos maiores ou iguais a 7).",
       tryAgain: "Mensagem para nova tentativa."
   };
   ```
4. Crie o card e o link do novo quiz na Central de Missões (`index.html`).

> O `quiz.js` é compartilhado: uma correção nele se aplica a todos os quizzes
> simultaneamente. As perguntas não devem ser incluídas nesse arquivo.

---

## Publicação (GitHub Pages)

O site é publicado automaticamente a cada `push` na branch `main`
(via `.github/workflows/static.yml`), no endereço:

**https://sonallycecilia.github.io/profia/**

Como os caminhos são relativos, o comportamento local é idêntico ao publicado.
Basta executar `git push`.

---

## Pendências conhecidas

- **`guias/scratch/aulas/aula0/aula0.html`** referencia `robot-happy.png` e
  `robot-sad.png`, que não existem em `guias/scratch/assets/`. Adicione as imagens
  ou substitua a referência.
- **Marca d'água do CSS:** `css/style.css` utiliza `url('Logo Profia.png')` como
  fundo das páginas, mas esse arquivo não existe na pasta `css/`. O fundo é
  exibido sem a logo, sem prejuízo ao layout. Para ativá-lo, adicione a imagem em
  `css/` ou ajuste o caminho para `../guias/scratch/assets/logo-profia.png`.
- **`index.html`** referencia os quizzes da pasta `quizzes/`. Ao adicionar um
  quiz novo, crie o card e o link correspondentes.
