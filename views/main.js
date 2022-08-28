function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url,false)
    request.send()
    return request.responseText

}

function criaLinha(livro){
    const linha = document.createElement("tr")
    tdAutor = document.createElement("td")
    tdGenero = document.createElement("td")
    tdNome = document.createElement("td")
    tdNome.innerHTML = livro.nome
    tdAutor.innerHTML = livro.autor
    tdGenero.innerHTML = livro.genero
    
    
    linha.appendChild(tdNome)
    linha.appendChild(tdAutor)
    linha.appendChild(tdGenero)

    return linha

}

function main(){
    const data = fazGet("https://trabalho-livraria.herokuapp.com/api/livros")
    const livros = JSON.parse(data)
    const tabela = document.getElementById("tabela")
    livros.forEach(element => {
        const linha = criaLinha(element)
        tabela.appendChild(linha)
    });
}

main()