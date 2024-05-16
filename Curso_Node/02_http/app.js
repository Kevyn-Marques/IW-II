//-----------Selecionar o modulo HTTP do Node--------------------
var http = require('http')

//-----------------Abrir um servidor http-------------------------

http.createServer(function(req,res){
    res.end("<b>Never</b> gonna give you up,\nNever gonna let you down,\nNever gonna turn around and desert you,\nNever gonna make you cry,\nNever gonna say goodbye,\nNever gonna tell a lie and hurt you")
}).listen(8081)

console.log('Servidor rodando...')