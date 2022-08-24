const express = require('express');
const livros = require('../models/livros');
const router = express.Router();
const Book = require('../models/livros');

// POSt Livro
router.post('/', (req, res) => {
    book = new Book({
        nome: req.body.nomeLivro,
        autor: req.body.nomeAutor,
        genero: req.body.genero
    });
    book.save().then(book => {
        res.send(book);
    }).catch(error => {
        res.status(500).send("Nao foi possivel salvar este livro");
    });
});

//GET ALL livros

router.get('/', (req, res) => {
    Book.find().then(books => res.send(books)).catch((error) => {
        res.status(500).send("algo errado");
    })
})

//GEL BY ID livros

router.get("/:bookid" , async (req,res) => {
    const book = await Book.findById(req.params.bookid);
    if(!book) res.status(404).send("livro nao encontrado");
    res.send(book);
});
    

module.exports = router;