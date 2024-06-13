const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//Config 
    //Template Engine

app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}))
app.set('view engine','handlebars')

//Conexão Banco de Dados

const sequelize = new Sequelize('test','root','',{
    host:'localhost',
    dialect:'mysql'
})

//Rotas
app.get('/cadastro',function(req,res){
    res.render('formulario')
})
app.post('/add',function(req,res){
    res.send('Recebido')
})

app.listen(8081, function(){
    console.log("aiii papai, SERVIDOR TÁ ON http://localhost:8081");
});


