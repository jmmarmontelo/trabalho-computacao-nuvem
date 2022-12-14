const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const livrosRota = require('./rotas/livro');
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use('/api/livros', livrosRota);


mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser:true}
).catch(error => {  
    console.log("Erro ao conectar com o Banco de dados")
})


app.listen(PORT, () => {
    console.log("Online");
})