const mongoose = require('mongoose');

const LivroEsquema = new mongoose.Schema({
    nome:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    autor:{
        type:String,
        required:false
    },
    genero:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50

    }
});

module.exports = new mongoose.model('Livro',LivroEsquema);