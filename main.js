function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url,false)
    request.send()
    return request.responseText

}

async function main(){
    usuarios = await fazGet("http://localhost:3000/api/livros")
    console.log(usuarios)
}

main()