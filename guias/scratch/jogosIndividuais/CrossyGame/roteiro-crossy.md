# Crossy Road — Roteiro dos Guias

> Roteiro de referência para produção dos guias do Crossy Game.

---

# Guia 1 — Construindo a Avenida + Movimentação do Goblin

**Foco:** primeiros passos e familiarização com o ambiente.

## Conteúdo

- Explicação do jogo (história, objetivos e desafios)
- Carregamento e configuração dos assets e suas fantasias (cenário da avenida, goblin, carros)
- Movimentação do personagem para cima e para baixo pela avenida e posição inicial
- Sistema de pontuação: a cada travessia bem-sucedida (quando o personagem chega no topo), ele transmite uma mensagem e outro clone aparece no ponto de partida
- A mecânica do exército: a cada travessia bem-sucedida, um novo goblin aparece e se junta à fileira no topo
- Existe um conceito matemático por trás da lógica de criação do exército de goblins. Os alunos costumam ter dificuldade em entender que a posição é dada através de uma conta matemática (pontos + coordenadas). Reservar um espaço para explicar essa conta deve ajudar em uma melhor compreensão e assimilação do conteúdo.
- Explicar a variável de controle da criação dos clones

---

### 📌 Obs — Transmissão de mensagem

Aqui o jogo usa transmissão de mensagem para avisar que a travessia deu certo, então o guia deve trazer uma explicação sobre esse conceito. Vale mostrar para o aluno a ideia de um personagem "mandar um recado" e outro "ficar esperando esse recado para agir": quando o goblin chega do outro lado, ele transmite uma mensagem, e o exército lá no topo só reage porque está ouvindo esse aviso.

---

### 📌 Obs — A matemática do exército

O guia deve explicar a conta que define onde cada goblin aparece no topo, é ela que faz o exército se formar certinho na tela. A posição parte de um ponto fixo e anda um tanto para a esquerda a cada travessia:

```
posição = 210 − (pontos × 25)
```

Ou seja, cada novo goblin nasce 25 passos à esquerda do anterior, e por isso eles ficam enfileirados. Vale fazer essa conta junto com a turma nos primeiros valores (1, 2, 3 pontos...), mostrando a multiplicação e a subtração por trás do que aparece na tela.

---

### 📌 Obs — Clones

Como é um jogo mais avançado, partimos do pressuposto de que o aluno já domina esse conceito, então basta uma notinha rápida relembrando que o carro "modelo" vai gerar as cópias que aparecem na tela.

---

# Guia 2 — Criando os Obstáculos do Jogo

**Foco:** blocos personalizados, aleatoriedade dos carros, geração de clones e mecânica de punição.

## Conteúdo

- Inserção dos carros pela ideia de clone: existe um único carro "modelo", e ele fica gerando cópias de si mesmo o tempo todo
- Explicar o sorteio que dá variedade a cada carro (aleatoriedade):
  - O jogo "joga um dado" para escolher a cor do carro entre as várias fantasias de cor
  - E faz outro sorteio para escolher a pista e a direção, ou seja, de qual lado o carro entra e para onde ele vai (por isso uns vêm da esquerda e outros da direita)
- Blocos personalizados (conceito principal do guia): depois de sortear a cor, o jogo não repete os comandos de animação um por um, ele chama um bloco criado pra fazer a animação do carro.
- Fazer a colisão do goblin com carro: o jogo fica checando o tempo todo se o goblin encostou em algum carro; quando isso acontece, ele volta para o início e a partida termina

---

### 📌 Obs — Blocos personalizados (conceito central do guia)

Essa é a parte mais importante do guia, então reserve um bom espaço para ela. Explique que um bloco personalizado é como criar um comando novo, com um nome só nosso, que junta uma sequência de passos que a gente usa bastante, no caso, a animação do carro.

Vale mostrar para o aluno a lógica por trás disso: em vez de repetir os mesmos comandos para cada cor de carro, a gente monta o bloco uma vez e depois é só chamá-lo sempre que precisar. Isso deixa o projeto mais limpo, mais fácil de entender e de arrumar, e mostra uma ideia muito usada em programação: dar um nome a um conjunto de passos para reaproveitá-lo quantas vezes quiser.

Use exemplos visuais, passo a passo, antes de pedir a implementação.

---

### 📌 Obs — Aleatoriedade

O guia deve incluir uma seção de observações explicando a ideia de sorteio/aleatoriedade, mostrando que o jogo escolhe um número ao acaso para decidir a cor e outro para decidir a pista de cada carro. Vale usar exemplos visuais e explicar passo a passo, como se fosse um dado sendo jogado a cada carro que nasce, antes de pedir a implementação, para o aluno entender por que cada partida fica diferente.

---

# Guia 3 — Pontuação, Exército e Finalização

**Foco:** lógica com variáveis, recompensa e seção de desafios.

## Conteúdo

- Condição de objetivo/vitória: o que acontece quando o exército está completo?
- Sistema de vidas: criar uma variável de vidas que vai diminuindo quando o goblin é atingido, no lugar de acabar o jogo na primeira batida
- Tela de derrota quando as vidas chegam a 0

## Seção Desafio

- Criar uma tela inicial
- Aumentar a dificuldade (mais carros ou carros mais rápidos ao longo do tempo)
- Adicionar um item que dá pontos extras
- Criar uma nova fase (o aluno pode buscar ou desenhar uma nova avenida)
