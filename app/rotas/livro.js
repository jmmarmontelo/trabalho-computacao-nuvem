const express = require('express');
const router = express.Router();
const Book = require('../models/livros');


router.post('/', (req,res) => {
    book = new Book({
        nome:req.body.nomeLivro,
        autor:req.body.nomeAutor,
        genero:req.body.genero
    });
    book.save().then(book => {
        res.send(book);
    }).catch(error =>{
        res.status(500).send("Nao foi possivel salvar este livro");
    });
});

module.exports = router;