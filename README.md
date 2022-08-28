# Api livros
## Trabalho da disciplina Computaçlão em Nuvem GCC180
## Professor: Neumar Costa Malheiros
## Aluno: João Marcos Marmontelo

> Api que armazena informações de livros no banco de dados MongoDB Atlas, esta api esta em exeução na plataforma Heroku.

> Foi criado uma tabela chamada Livro no banco de dados que armazena o nome do livro, o nome do autor e o genero.

<br>

# Endpoints

## Método POST: https://trabalho-livraria.herokuapp.com/api/livros
> Ao chamar o metodo post é necessário passar os dados via JSON.
> Exemplo:
```
{
    "nomeLivro":"Harry Potter e a Pedra Filosofal",
    "nomeAutor":"J. K. Rowling",
    "genero":"fantasia e ficção"
}
```

## Método GET: https://trabalho-livraria.herokuapp.com/api/livros
> Retorna todos os livros armazenados no banco em um arquivo JSON.

## Método GET: https://trabalho-livraria.herokuapp.com/api/livros/id
> Retrona um determinado livro pelo seu id.

## Método PUT: https://trabalho-livraria.herokuapp.com/api/livros/id
> Atualiza um determinado livro pelo seu id sendo necessário passar o atributo alterado por um arquivo JSON.
> Exemplo:
```
{
    "nomeLivro": "Harry Potter e a Câmara Secreta"
}
```

## Método DELETE: https://trabalho-livraria.herokuapp.com/api/livros/id
> Remove determinado livro do banco de dados pelo seu id.
