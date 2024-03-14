const comecar = document.getElementById("comecar")
const usas = document.getElementById("usas")
var nome = ' '

function interagi(){
    nome = prompt("Qual seu nome?")
    usas.innerHTML = ("Olá " + nome + " beleza?")
}

comecar.addEventListener('click',interagi)