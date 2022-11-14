Este é um POC (Proof Of Concept) de Typescript, com o tema de um site de lista de filmes que possui nome, categoria e plataforma de cada filme.

Foram usadas as seguintes tecnologias: Postgresql, Typescript, Express, dotenv.

1- Adicionar filmes à lista;

POST: /movies-list

Body: { "name": "Ponyo", "platform": "Netflix", "genre": "Adventure", "status": "Not watched" }

2- Filtrar filmes por gênero;

GET: /movies/1/:genre

3- Filtrar filmes por plataforma;

GET: /movies/2/:platform

4- Atualizar valor do status de "Not watched" (não assistido) para "Watched" (assistido) e virce versa;

PUT: /movies/3/:name

5- Deletar algum filme da lista;

DELETE: /movies/4/:moviename