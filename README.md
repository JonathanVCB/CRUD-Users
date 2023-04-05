# Backend

Para inciar este projeto, primeiro abra seu vscode na pasta backend (na raiz do projeto nao ira funcionar) e instale as dependências. Portanto utilize o comando abaixo para instalar tais dependências:

```
yarn install
```

<br>

**Configure as variáveis de ambiente no seu .env**, passando as credenciais corretas para conectar em seu banco local

Com isso feito, para rodar sua aplicação, basta utilizar o comando

```
yarn dev
```

O projeto esta configurado para rodar na porta 3001

<br>

# **ROTAS**

# Baseurl: "localhost:3001/"

# POST - /users

exemplo de request:

```
{
"email": "teste@mail.com",
"name": "teste'",
"telephone": "1295484654"
}
```

exemplo de response:

```
{
	"name": "teste'",
	"email": "teste@mail.com",
	"telephone": "1295484654",
	"id": "ef4ad05e-ebf6-4ce1-b1a5-7f67eb294073",
	"createdAt": "2023-04-05T12:50:05.842Z"
}
```
