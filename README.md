# Devstage API

API criada através do evento NLW da rocketseat. Através desta API será criado um sistema de ranking de convites realizados pelos usuários.

## Variáveis de ambiente

Para o correto funcionamento, deve ser criado um arquivo .env na aplicação. Esse arquivo deve possuir as seguintes variáveis

| Variável       | Obrigatório | Descrição                                                                      | Exemplo                                             |
| -------------- | ----------- | ------------------------------------------------------------------------------ | --------------------------------------------------- |
| `PORT`         | ✅ Sim      | Porta em que o servidor irá rodar                                              | `3333`                                              |
| `WEB_URL`      | ✅ Sim      | URL do frontend. Necessário para fazer o redirect ao clicar no link do convite | `http://localhost:3000`                             |
| `POSTGRES_URL` | ✅ Sim      | URL de conexão com o banco de dados postgres                                   | `postgresql://docker:docker@localhost:5432/connect` |
| `REDIS_URL`    | ✅ Sim      | URL de conexão com o banco de dados redis                                      | `redis://localhost:6379`                            |

## Instalação

Para realizar a instalação desse projeto, basta clonar o repositório e, após isso, executar o seguinte comando:

```sh
npm install
```

Este projeto utiliza o drizzle como ORM, portanto deve ser executado o comando para rodar as migrações do banco de dados.

```sh
npm run db:migrate
```

## Linter

Este projeto utiliza o biomejs para realizar o linter da aplicação. Caso deseje que o editor faça a correção automática ao salvar os arquivos, é aconselhado criar uma configuração para o workspace com o seguinte json:

```json
{
  "editor.formatOnSave": true,
  "[typescript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "editor.codeActionsOnSave": {
    "source.organizeImports.biome": "explicit"
  }
}
```

## Documentação

Esta API possui integração com o Swagger. Para acessar essa documentação, basta acessar a rota /docs.
