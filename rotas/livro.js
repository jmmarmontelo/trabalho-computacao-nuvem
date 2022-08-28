const express = require('express');
const router = express.Router();
const Book = require('../models/livros');

// POST Livro
router.post("/", (req, res) => {
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
router.get("/", (req, res) => {
    Book.find().then(books => res.send(books)).catch((error) => {
        res.status(500).send("Nao foi possivel listar os livros");
    })
})

//GEL BY ID livro
router.get("/:bookid", async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookid);
        res.send(book);
    } catch (error) {
        res.status(404).send()
    }
});

// UPDATE BY ID livro
router.put('/:bookid', async (req, res) => {
    try {
        const updateBook = await Book.findByIdAndUpdate(req.params.bookid, {
            nome: req.body.nomeLivro,
            autor: req.body.nomeAutor,
            genero: req.body.genero
        },
            { new: true }
        )
        res.send(updateBook)
    } catch (error) {
        res.status(404).send()
    } 
})

//DELETE BY ID livro
router.delete('/:bookid', async (req, res) => {
    try {
        const book = await Book.findByIdAndRemove(req.params.bookid)
        res.send(book)
    } catch (error) {
        res.status(404).send()
    }
})

module.exports = router;