
# Find You Duo

Esse foi o projeto criado com o tema eSports no evento NLW eSports da rocketseat, sem dúvidas esse foi o melhor evento, nele foi criado uma página com a lista de games, e um modal possibilitando cria um anúncio com suas informações, assim possibilitando acha um duo para seu game favorito 
## 🔗 Contato
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/felipe-r-silva/)
[![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/felipe-rodrigues-s)


## Demonstração

<div aling='center'>
    <img src='https://github.com/felipe-rodrigues-s/imagens/blob/main/icon/Design%20sem%20nome.gif'/>
</div>

## Instalação

Antes de executar faça

```bash
  npm install
```
```bash
  npx prisma generate
```
    
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE_URL="file:../src/database/db.sqlite"`



## Documentação da API

#### Retorna todos os games

```http
  GET /games
```

| Descrição                           |
| :---------------------------------- |
| Retornara todos os games salvos no BD 
Se desejar adicionar games basta usar a feramenta prisma studio|

#### Retorna dados de um game

```http
  GET /games/:id/ads
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Adicionar um anúncio

```http
  POST /games/:id/ads
```

| Parâmetro   | Tipo       | 
| :---------- | :--------- | 
| `gameId`      | `string` | 
| `id`      | `string` | 
| `name`      | `string` | 
| `yarsPlayng`      | `Int` |
| `discord`      | `string` |
| `weekDays`      | `string` | 
| `hourStart`      | `Int` | 
| `houtEnd`      | `Int` | 
| `useVoiceChannel`      | `Boolean` |
