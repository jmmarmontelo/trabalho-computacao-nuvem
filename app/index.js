const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000
require('dotenv').config();

mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser:true}
).catch(error => {  
    console.log("erro no banco")
})

app.listen(PORT, () => {
    console.log("Escutando");
})