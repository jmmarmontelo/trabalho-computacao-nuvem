
fetch(`https://trabalho-livraria.herokuapp.com/api/livros`)
    .then(res => {
        return res.json()
    }).then(corpo => {
        corpo.forEach(element => {
            document.getElementById("nome").innerHTML = element.nome
            document.getElementById("autor").innerHTML = element.autor
            document.getElementById("genero").innerHTML = element.genero
        });
    })
