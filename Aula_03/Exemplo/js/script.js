var nome = document.getElementById('nome');
const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');
var str = ""



function pegaNome(){
    str = nome.value
    console.log(str)
    resultado.innerHTML = str
}

botao.addEventListener('click',pegaNome)