# Tank Game — Roteiro dos Guias

> Roteiro de referência para produção dos guias do Tank Game.

O Tank Game é um jogo de dois jogadores com uma base extremamente versátil — e é justamente isso que o torna especial. A estrutura do jogo permite diversas configurações:

- **PvP:** os dois jogadores se enfrentam diretamente, tentando destruir o tank adversário
- **Modo cooperativo:** os dois jogadores se unem para enfrentar inimigos que surgem no mapa
- **Coleta de itens:** os jogadores competem ou cooperam para coletar itens espalhados pelo cenário
- **Defesa de base:** os dois jogadores protegem um ponto central contra ondas de inimigos
- **Captura de território:** cada tank conquista áreas do mapa ao passar por elas

Essa flexibilidade pode ser explorada nos guias seguintes ou apresentada como desafio para os alunos criarem sua própria variação.

---

# Guia 1 — Montando a Base do Jogo

**Foco:** primeiros passos, movimentação dos tanks e lógica de disparo.

## Conteúdo

- Carregamento e configuração dos assets: cenário, tanks e bullets (atenção às fantasias de cada sprite)
- Movimentação do Tank 1 (vermelho) pelas teclas WASD
- Movimentação do Tank 2 (azul) pelas teclas de seta
- Lógica de disparo:
  - Tank vermelho atira com a tecla Espaço
  - Tank azul atira com a tecla 0
- Cada tank possui sua própria variável de posição da bala: `x_vermelho` para o vermelho e `x_azul` para o azul

---

# Guia 2 —
