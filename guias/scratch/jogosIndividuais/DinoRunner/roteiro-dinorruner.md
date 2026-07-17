# Dino Runner — Guias do Projeto

> Documento de consulta para adaptar ao template HTML.
> Baseado na lógica real do projeto Scratch **"my dino runner"** (id 1289646728).
> Abordagem **conceitual**, seguindo o roteiro dos 3 guias.

---

## Mapa geral do projeto (referência rápida)

Antes dos guias, um resumo do que existe no projeto — útil pra consulta enquanto você monta o material.

**Sprites**

| Sprite | Papel | Fantasias |
|---|---|---|
| **dino** | O personagem: corre, pula, morre | `0` = Normal (pernas juntas), `1` = Walk 1, `2` = Walk 2, `dead` = Scared |
| **chão** | Piso infinito que rola | 1 fantasia (a faixa do chão) |
| **cactos** | Obstáculos gerados por clones | `1` a `5` (5 tamanhos/formatos) |
| **nuvem** | Fundo com sensação de profundidade | 1 fantasia |
| **Iniciar** | Botão de começar / recomeçar | `btn` |

**Variáveis (globais)**

| Nome no projeto | O que representa |
|---|---|
| `velocidade de pulo` | A velocidade vertical do dino (o "Y Velocity") |
| `linha do chão` | A altura fixa do chão onde o dino se apoia (`-123`) |
| `pontos` | Pontuação da partida (cresce com o tempo) |
| `Recorde` | Maior pontuação já feita |

**Recados (mensagens) que sincronizam tudo:** `Start Game` e `Game Over`.

**Constantes que aparecem no código (bom ter à mão):**

- Impulso do pulo: `velocidade de pulo = 12`
- Gravidade: `change velocidade de pulo by -1` por quadro
- Chão do dino: `y = -123` · Chão do sprite chão: `y = -138`
- Velocidade do chão/cactos: `-10` px por quadro · Nuvem: `-1` px (mais lenta = profundidade)
- Cactos nascem a cada `random(0.7 .. 1.8)` segundos · Nuvens a cada `4` s

---

# Guia 1 — Construindo o Cenário e o Dino que Corre

**Foco:** ambiente, animação e a física do pulo.

## 1.1 Explicação do jogo

Dino Runner é o jogo do dinossauro que corre sozinho por um deserto sem fim. O jogador não controla pra frente nem pra trás — o dino corre no lugar e o mundo passa por ele. O único comando é **pular** (tecla espaço) pra desviar dos cactos que vêm da direita. Quanto mais tempo sobreviver, mais pontos. Encostou num cacto, acabou. O desafio é a velocidade e o ritmo imprevisível dos obstáculos.

## 1.2 Assets e fantasias

Carregamos e posicionamos os elementos do cenário: o **chão**, o **dino**, os **cactos** e as **nuvens**.

O dino tem quatro "poses" (fantasias) e o jogo troca entre elas pra dar vida ao personagem:

- **Walk 1** e **Walk 2** (fantasias `1` e `2`): alternadas rapidamente, dão a impressão de que ele está **correndo**.
- **Normal** (fantasia `0`, pernas juntas): usada **enquanto ele está no ar**, durante o pulo.
- **Scared** (fantasia `dead`): aparece **quando ele bate** num cacto.

A troca correndo/parado não é aleatória: o jogo pergunta "o dino está tocando o chão?". Se sim, alterna Walk 1 ↔ Walk 2 a cada instante (0,07 s). Se não (está no ar), fica na fantasia Normal.

## 1.3 Posição inicial do dino

Ao ligar o jogo, o dino é colocado no canto esquerdo, apoiado no chão: `x = -199`, `y = -123`. Esse `-123` é a altura do chão — é o valor guardado na variável `linha do chão`, e é pra ele que o dino sempre volta depois de cair.

### Blocos personalizados

O chão usa um bloco que **a gente mesmo criou**, chamado `scroll`. Ele faz duas coisas simples: "**anda um pouco pra esquerda e, se passou do limite, volta pro começo**".

A ideia central pra ensinar: quando uma sequência de passos se repete muito, a gente **dá um nome a ela** e passa a chamar só pelo nome, em vez de remontar os mesmos blocos toda vez. Isso deixa o projeto mais limpo e fácil de entender — se um dia a gente quiser mudar como o chão anda, muda num lugar só. É a mesma ideia de uma "receita" que você guarda e reusa.

*(No código, tanto o pedaço original quanto o clone do chão simplesmente ficam repetindo `scroll` pra sempre.)*

## 1.4 O chão infinito

O truque do chão que nunca acaba: existem **dois pedaços** de chão iguais, um começando na tela e outro logo atrás (fora da tela, à direita). Os dois andam para a esquerda o tempo todo. Quando um pedaço passa completamente da borda esquerda, ele **volta para o começo, à direita**, e recomeça. Como sempre tem um pedaço entrando enquanto outro sai, o olho enxerga um chão contínuo e sem fim.

No projeto, o segundo pedaço é um **clone** do chão, e o "voltar pro começo" é feito com um bloco personalizado (veja a observação abaixo).

## 1.5 O pulo com a tecla espaço

Ao apertar espaço (só quando o dino está no chão), o jogo dá um **empurrão pra cima**: coloca `velocidade de pulo = 12`. A partir daí, a gravidade assume e desenha o arco do pulo (próxima observação).

---



---

### 📌 Obs — A física do pulo (parte principal do guia)

O pulo **não é** uma animação pronta de "sobe e desce". Ele nasce de uma variável: `velocidade de pulo` (a velocidade vertical).

A cada instante, duas coisas acontecem:

1. A **posição em y** muda de acordo com a velocidade — o dino sobe conforme a velocidade.
2. A **velocidade** muda de acordo com a gravidade — a cada quadro ela diminui em 1 (`change velocidade de pulo by -1`).

Então, quando você aperta espaço, a velocidade vira `12` (bem positiva) e o dino sobe rápido. Quadro a quadro a gravidade tira 1: `12, 11, 10...` — ele sobe cada vez mais devagar. A velocidade chega a zero (ele "para no ar" por um instante) e depois fica **negativa**: `-1, -2, -3...` — ele começa a cair, cada vez mais rápido, até tocar o chão de novo. Esse vai-e-volta é o **arco** do pulo.

A comparação que funciona: **jogar uma bolinha pra cima**. Ela sobe perdendo força, para lá em cima por um instante e volta caindo. Ninguém programa "a subida e a descida" da bolinha — isso é só consequência da gravidade agindo sobre a velocidade.

**Nota — o chão como altura fixa:** o chão é a altura `linha do chão` (`-123`). O jogo só deixa o dino **pular quando ele está encostado nesse chão** — por isso não dá pra "pular no ar" nem pular duas vezes seguidas. Quando ele encosta, a velocidade é zerada e a posição é fixada exatamente em `-123`, deixando tudo pronto pro próximo pulo.

---

# Guia 2 — Obstáculos, Clones e o Chão que Anda

**Foco:** clones, aleatoriedade e blocos personalizados.

## 2.1 Os cactos pela ideia de clone

Existe **um único cacto "modelo"**, que fica **escondido** e nunca aparece no jogo. A função dele é só uma: ficar **criando cópias de si mesmo** o tempo todo. Cada cópia (clone) é que aparece na tela, anda e some. Com um sprite só, a gente enche a tela de cactos.

## 2.2 O sorteio que dá variedade (aleatoriedade)

Duas coisas são sorteadas, e é isso que faz cada partida ser diferente:

- **Quando nasce o próximo cacto:** o modelo espera um tempo sorteado — entre `0,7` e `1,8` segundos — antes de criar o próximo clone. Assim eles nunca vêm no mesmo ritmo.
- **Qual a aparência do cacto:** cada clone, ao surgir, sorteia uma fantasia entre `1` e `5` (cactos de tamanhos e formatos diferentes).

## 2.3 Cada clone anda sozinho

Quando um clone nasce, ele aparece na direita (`x = 260`), sorteia sua fantasia e então **anda sozinho** para a esquerda (`-10` px por vez) até sair da tela. Assim que passa da borda (`x < -230`), ele **se apaga**. Cada clone tem vida própria, então vários cactos podem estar na tela ao mesmo tempo, cada um no seu ponto do caminho.

## 2.4 As nuvens no fundo

As nuvens funcionam parecido com os cactos (nascem de clones), mas com dois detalhes: ficam **na camada de trás** (atrás de tudo) e andam **bem mais devagar** — só `1` px por vez, contra os `10` px do chão. Esse contraste de velocidade cria a **sensação de profundidade**: o que está longe se move menos, o que está perto se move mais.

---

### 📌 Obs — Clones (conceito central do guia)

Vale separar bem os dois papéis:

- **O modelo:** o cacto original, **escondido**, que só serve pra **criar cópias**. Ele nunca corre nem colide — é a "fábrica".
- **As cópias (clones):** os cactos que de fato **aparecem, andam e desviam**. Cada um roda o seu próprio script "quando eu começo como clone".

A sacada é que **cada clone tem vida própria**: eles não precisam saber uns dos outros. Isso permite ter muitos cactos na tela **usando um sprite só** — em vez de desenhar 10 sprites de cacto, você tem 1 modelo e deixa os clones se virarem.

---

### 📌 Obs — Aleatoriedade

Pense no "sorteio" como um **dado jogado a cada cacto**. São dois dados diferentes:

- Um decide **a aparência** (qual das 5 fantasias).
- Outro decide **o intervalo** até o próximo cacto nascer.

É essa dupla de sorteios que impede o jogo de ficar decorável e faz **cada partida ficar diferente** da anterior.

---

# Guia 3 — Colisão, Estados do Jogo e Finalização

**Foco:** colisão, transmissão de mensagens e telas do jogo.

## 3.1 Colisão com o cacto

O dino fica **verificando o tempo todo** se encostou em algum cacto. No instante em que encosta, três coisas acontecem em sequência: ele troca para a fantasia **Scared** (`dead`), avisa o jogo inteiro que acabou (`broadcast Game Over`) e a partida **para**.

## 3.2 Estados do jogo como telas diferentes

O jogo tem três momentos, e a gente pensa neles como **telas**:

- **Tela inicial:** o botão **Iniciar** aparece (com uma leve animação quando o mouse passa por cima). Nada se move ainda.
- **Jogo rolando:** ao clicar em Iniciar, o botão some e tudo começa — dino corre, chão rola, cactos nascem.
- **Tela de fim:** quando o dino bate, o jogo para e o botão **Iniciar reaparece**, permitindo começar de novo.

## 3.3 Pontuação simples pelo tempo

A pontuação é o **tempo de sobrevivência**: a variável `pontos` começa em `0` e ganha `+1` a cada segundo enquanto a partida rola. Simples e eficaz — sobreviver mais = pontuar mais.

## 3.4 Placar de Recorde

Quando a partida termina, o jogo compara: se os `pontos` desta partida forem **maiores que o `Recorde`**, o `Recorde` é atualizado. Assim o melhor resultado fica guardado entre uma partida e outra.

---

### 📌 Obs — Transmissão de mensagem

A ideia: um sprite **"manda um recado"** e os outros **"esperam esse recado pra agir"**. Ninguém precisa ficar vigiando ninguém — todos ouvem o mesmo aviso e reagem juntos.

No Dino Runner são dois recados que comandam o jogo inteiro:

- **`Start Game`** — disparado pelo botão Iniciar ao ser clicado. De uma vez só, ele faz o dino começar a correr e a checar colisão, o chão rolar, os cactos e nuvens nascerem, e a pontuação zerar e começar a contar.
- **`Game Over`** — disparado pelo dino quando ele bate. Ele congela o jogo, faz o botão Iniciar reaparecer e dispara a checagem de recorde.

O ponto que ajuda o aluno a assimilar: **um único aviso dispara vários sprites ao mesmo tempo**. E são essas mensagens que **controlam o fluxo de telas** — sair da tela inicial pro jogo, e do jogo pra tela de fim.

---

## 3.5 Seção Desafio

> Aqui a ideia é dar o **caminho geral, sem o passo a passo pronto**, pra o aluno ganhar autonomia aplicando o que viu nos três guias.

**Deixar o jogo mais rápido com o tempo.** Hoje os cactos andam sempre na mesma velocidade. E se essa velocidade fosse crescendo conforme os pontos sobem? Pense em usar uma variável de velocidade em vez do número fixo `-10`, e em como aumentá-la aos poucos. *(Dica de reflexão: o que muda no arco do pulo e na dificuldade quando o mundo acelera?)*

**Criar um novo obstáculo — um pássaro que voa.** Assim como o cacto, ele pode nascer de clones. A diferença é que o pássaro vem **no alto**, não no chão. Como o aluno já entende clones e aleatoriedade, o desafio é adaptar essas ideias pra um obstáculo que exige outra reação do jogador.

- **Fazer o dino abaixar pra desviar do pássaro.** Se o pássaro voa alto, pular não resolve — talvez o dino precise **abaixar**. Que tecla faria isso? Que "pose" (fantasia) e que mudança de posição representariam o dino agachado? Como garantir que ele só abaixa no chão, do mesmo jeito que só pula no chão?

**Adicionar sons.** Um som no **pulo** e um som na **batida** deixam o jogo muito mais vivo. Onde, no fluxo que a gente já montou, seria o lugar certo pra tocar cada um?

---

*Fim dos guias. Conteúdo conceitual pronto pra ser diagramado no seu template HTML.*
