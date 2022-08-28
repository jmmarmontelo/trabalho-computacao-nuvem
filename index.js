const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const livrosRota = require('./rotas/livro');
const PORT = process.env.PORT || 3000
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use('/api/livros', livrosRota);

app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')


mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser:true}
).catch(error => {  
    console.log("erro no banco")
})

app.get("/", (req,res) =>{
    res.render('index.ejs')
})

app.listen(PORT, () => {
    console.log("Escutando");
})