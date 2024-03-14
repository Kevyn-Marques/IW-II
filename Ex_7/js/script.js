const comecar = document.getElementById("comecar")
var nome = ' '

function interagi(){
    nome = prompt("Qual seu nome?")
    alert("Olá " + nome + " beleza?" ) 
}

comecar.addEventListener('click',interagi)