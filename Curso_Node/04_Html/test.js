const Sequelize = require('sequelize')
const sequelize = new Sequelize('test','root','',{
    host:'localhost',
    dialect:'mysql'
})

// sequelize.authenticate().then(function(){
//     console.log('deu bão pae')
// }).catch(function(erro){
//     console.log('erro: ' + erro)
// })

const Postagem = sequelize.define('postagens',{
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios',{
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    }
})

//  Postagem.sync(force=true)
//  Usuario.sync(force=true)

// Postagem.create({
//     titulo:"primeira postagem",
//     conteudo:"conteudinho brother"
// })