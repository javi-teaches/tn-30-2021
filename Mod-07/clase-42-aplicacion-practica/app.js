const express = require('express');
const app = express();

app.use(express.static('public'));

app.set("view engine", "ejs");

app.listen (process.env.PORT || 5500, () => console.log('Servidor funcionando bien'));

app.get('/', (req,res)=>{
    res.render('home');
});