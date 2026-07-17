# Tank Game — Guia 2: Modo PvP (Batalha entre os tanks)

**Público:** crianças do ensino fundamental
**Foco:** colisões da bala com o tank inimigo, vidas e fim de jogo
**Projeto base:** os dois tanks já andam e já atiram (Guia 1)

---

## Antes de começar: o que o jogo já sabe fazer

No projeto base, tudo isto já está pronto:

- O **tank vermelho** anda com **W A S D** e atira com a tecla **Espaço**.
- O **tank azul** anda com as **setas** e atira com a tecla **0**.
- A **bala (bullet)** aparece na frente do tank que atirou, viaja em linha reta e depois some com uma animação de explosão.
- O tank azul já **não atravessa** paredes nem o outro tank (ele testa `tocando na cor` e `tocando em tank_vermelho`).

O que **ainda não existe** e vamos construir neste guia:

> Quando a bala acerta o tank inimigo, **nada acontece**. Vamos fazer a bala causar dano, dar **vidas** para cada tank e criar o **fim de jogo** com um vencedor.

Explique isso para a turma mostrando o jogo rodando: "Olha, a bala passa por cima do tank e não faz nada. Nosso trabalho hoje é ensinar o jogo a saber quando alguém foi atingido."

---

## Passo 0 (importante): uma bala para cada tank

No projeto base, os dois tanks usam as **mesmas** variáveis `X`, `Y` e `Direcao` para nascer a bala. Isso funciona quando só um atira por vez, mas pode **embolar** se os dois atiram quase juntos: a bala de um "rouba" a posição do outro.

Para o modo PvP ficar justo, cada tank ganha as **suas próprias** variáveis. Assim a batalha nunca embola.

**Crie estas variáveis** (aba **Variáveis** → *Criar uma variável*), todas **"Para todos os atores"**:

| Variável | Serve para |
|---|---|
| `x_vermelho`, `y_vermelho`, `dir_vermelho` | posição e direção da bala do tank vermelho |
| `x_azul`, `y_azul`, `dir_azul` | posição e direção da bala do tank azul |
| `vidas_vermelho` | quantas vidas o tank vermelho ainda tem |
| `vidas_azul` | quantas vidas o tank azul ainda tem |

> **Dica para crianças:** compare com a vida real — "cada jogador tem a sua própria mochila; ninguém mexe na mochila do outro."

Você pode deixar `vidas_vermelho` e `vidas_azul` **marcadas** (aparecendo na tela) para virar o "placar" do jogo. As outras variáveis podem ficar **desmarcadas**.

---

## Passo 1 — Dar vidas para cada tank no início

Isto avisa o jogo que cada tank começa com **3 vidas** toda vez que a bandeira verde é clicada.

No sprite **tank_vermelho**, adicione um novo bloco solto:

```
quando [bandeira verde] for clicado
mude vidas_vermelho para (3)
```

No sprite **tank_azul**, faça o mesmo:

```
quando [bandeira verde] for clicado
mude vidas_azul para (3)
```

> Pode usar outro número (5 vidas deixa a partida mais longa; 1 vida deixa "morte súbita"). Deixe a turma escolher.

---

## Passo 2 — A bala precisa saber de quem ela é

Como agora cada tank tem a sua bala, precisamos marcar **quem atirou**. O jeito mais simples para crianças: **a bala vermelha só machuca o azul, e a bala azul só machuca o vermelho.**

Vamos usar as **fantasias da bala** para diferenciar (ou, se preferir, uma variável do clone). Aqui usamos o caminho mais fácil de entender: **duas cópias do disparo**, uma que carrega a marca do vermelho e outra do azul.

### No tank_vermelho (parte do disparo)

Troque, dentro do `se tecla espaço pressionada?`, as variáveis antigas pelas novas do vermelho:

```
se <tecla (espaço) pressionada?> então
    mude x_vermelho   para (posição x)
    mude y_vermelho   para (posição y)
    mude dir_vermelho para (direção)
    crie clone de (bullet)
    espere (0.1) seg
```

### No tank_azul (parte do disparo)

Dentro do `se tecla 0 pressionada?`:

```
se <tecla (0) pressionada?> então
    mude x_azul   para (posição x)
    mude y_azul   para (posição y)
    mude dir_azul para (direção)
    crie clone de (bullet)
    espere (0.1) seg
```

> Se o tank azul ainda não tem a parte de disparo, copie a estrutura do vermelho e troque a tecla para **0** e as variáveis para as **_azul**.

---

## Passo 3 — A bala descobre em quem bater (o coração do PvP)

Toda a "mágica" do PvP acontece no sprite **bullet**, no bloco **"quando eu começar como um clone"**.

A ideia em palavras simples:

1. A bala nasce na posição de **quem atirou**.
2. Ela anda para frente, um pouquinho de cada vez.
3. A **cada passinho** ela pergunta: *"estou tocando em um tank inimigo?"*
4. Se **sim** → tira 1 vida daquele tank e a bala explode.
5. Se ela andar demais sem acertar ninguém → some sozinha.

Como cada tank guarda a posição em variáveis diferentes, faça a bala nascer com a posição de **um** dos tanks. A forma mais didática para a turma é ter **um bloco de clone para cada cor**. Exemplo para a **bala do vermelho** (a bala do azul é igual, trocando as variáveis e o alvo):

```
quando eu começar como um clone
mude para a fantasia (bullet)
vá para x: (x_vermelho) y: (y_vermelho)
aponte para a direção (dir_vermelho)
mostre
repita (30) vezes
    mova (10) passos
    se <tocando em (tank_azul)?> então
        mude vidas_azul para (vidas_azul - 1)
        transmita (explosao)          ← opcional: som/efeito
        pare [este script]            ← a bala parou de andar; agora vai explodir
    se <tocando na cor (parede)?> então
        pare [este script]            ← bateu na parede e some
apague este clone
```

Depois desse trecho vem a **animação de explosão** que já existe no projeto (as fantasias que trocam rápido e o `apague este clone`). Você pode aproveitá-la.

> **Por que `repita 30` com `mova 10`?** A bala anda em 30 pedacinhos em vez de um salto só. Assim ela consegue "ver" o tank no meio do caminho. Se ela andasse tudo de uma vez, poderia pular por cima do inimigo sem perceber.

> **Sobre a `cor (parede)`:** clique no quadradinho de cor do bloco `tocando na cor` e use o conta-gotas para pegar a cor das paredes/pedras do cenário. Se as paredes tiverem várias cores, escolha a mais comum ou pule esta parte no começo.

---

## Passo 4 — Perder vida e o fim de jogo

Agora que `vidas_azul` e `vidas_vermelho` diminuem quando a bala acerta, cada tank precisa reagir ao chegar a **zero**.

No sprite **tank_azul**, adicione:

```
quando [bandeira verde] for clicado
sempre
    se <(vidas_azul) < (1)> então
        transmita (fim de jogo)
        pare [todos]
```

No sprite **tank_vermelho**, o mesmo trocando a variável:

```
quando [bandeira verde] for clicado
sempre
    se <(vidas_vermelho) < (1)> então
        transmita (fim de jogo)
        pare [todos]
```

**Mostrar o vencedor (bem simples):** crie um sprite ou fantasia com o texto *"Vermelho venceu!"* e outro *"Azul venceu!"*. Antes do `pare [todos]`, mande mostrar o cartaz certo:

- Se `vidas_azul < 1` → **o vermelho venceu** (mostre o cartaz do vermelho).
- Se `vidas_vermelho < 1` → **o azul venceu** (mostre o cartaz do azul).

> Para crianças menores, pode ser só o texto na tela com o bloco `diga` de um dos tanks: `diga [Vermelho venceu!] por (3) segundos`.

---

## Passo 5 — Testar e ajustar (a parte mais divertida)

Rode com a bandeira verde e teste em dupla. Coisas boas para a turma observar e mexer:

- **A bala está muito rápida e "atravessa" o tank?** Aumente o `repita` (ex.: 40) e diminua o `mova` (ex.: 8).
- **A partida acaba rápido demais?** Aumente as vidas para 5.
- **A bala acerta o próprio tank que atirou?** Coloque um `espere 0.1 seg` logo depois de a bala nascer, para ela sair de cima do dono antes de checar colisão.
- **Quer sons?** Use a aba **Sons** e adicione um "bum" no `transmita (explosao)`.

---

## Guia 2 — Parte B: Solte a criatividade (as outras variações)

O mesmo jogo vira 4 jogos diferentes trocando **quem é o alvo** e **o que conta ponto**. Use estes desafios como "missões" para os alunos criarem a própria versão. Nenhum precisa de código novo difícil — quase tudo reaproveita o que fizemos no PvP.

### 1. Cooperativo contra inimigos
Os dois tanks viram **amigos** e enfrentam inimigos que aparecem sozinhos.
- Crie um sprite **inimigo** que nasce em posição aleatória (`vá para posição aleatória`) e persegue com `aponte para` + `mova`.
- A bala dos **dois** tanks machuca o inimigo (`se tocando em (inimigo)`).
- Some os pontos num placar único `pontos_equipe`.
- **Pergunta para a turma:** quantos inimigos ao mesmo tempo deixam o jogo divertido, mas não impossível?

### 2. Coleta de itens
Espalhe **itens** (moedas, estrelas) pelo mapa.
- Cada item é um sprite (ou clones) que testa `se tocando em (tank_vermelho)` → `mude pontos_vermelho +1` e `esconda`.
- Igual para o azul com `pontos_azul`.
- Ganha quem juntar mais itens antes do tempo acabar (use um cronômetro com uma variável `tempo`).
- **Versão cooperativa:** um placar só, e a meta é coletar tudo juntos.

### 3. Defesa de base
Um ponto central (sprite **base**) precisa ser protegido.
- Inimigos andam em direção à base; se `tocando em (base)` → `mude vida_base -1`.
- Os dois tanks atiram nos inimigos para defender.
- Fim de jogo quando `vida_base < 1`. Placar = quantas ondas aguentaram.

### 4. Captura de território
Cada tank "pinta" o chão por onde passa.
- Use um sprite **carimbo** com a função **carimbar** (bloco *Caneta*) na cor do tank enquanto ele anda.
- No fim, ganha quem pintou mais. (Contar área é avançado — para crianças, basta o **efeito visual** de dominar o mapa, e o professor decide o vencedor "no olho".)

> **Desafio aberto (o melhor de todos):** peça para cada dupla **inventar a própria regra** — "e se a bala fizesse o tank ficar lento?", "e se pegar um item desse escudo?". A base do Tank Game aguenta todas essas ideias. É aqui que a criatividade aparece.

---

## Resumo dos blocos novos deste guia

| Onde | O que adicionamos |
|---|---|
| tank_vermelho / tank_azul | vidas no início; disparo usando variáveis próprias; checagem de fim de jogo |
| bullet | colisão com o tank inimigo dentro do `repita`; tirar 1 vida; parar/explodir |
| Variáveis novas | `vidas_vermelho`, `vidas_azul`, `x/y/dir_vermelho`, `x/y/dir_azul` |
| Mensagens | `explosao`, `fim de jogo` |

Bom jogo! 🎮
