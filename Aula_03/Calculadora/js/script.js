//----------------Definição de Variaveis-----------
const viraNum1 = document.getElementById('num1')
const viraNum2 = document.getElementById('num2')
const somar = document.getElementById('somar')
const sub = document.getElementById('sub')
const mult = document.getElementById('mult')
const divi = document.getElementById('divi')
const resultado = document.getElementById('resultado')
const dansa = document.getElementById('dansa')
const limpar = document.getElementById('limpa')
var num1 = 0
var num2 = 0
var conta = 0

//-------Funções--------------------
function Mais(){
    num1 = Number(viraNum1.value)
    num2 = Number(viraNum2.value)
    conta = (num1 + num2)
    resultado.innerHTML = (conta) 
    dansa.src = "img/esquelis.gif" 
}
function Menos(){
    num1 = Number(viraNum1.value)
    num2 = Number(viraNum2.value)
    conta = (num1 - num2)
    resultado.innerHTML = (conta) 
    dansa.src = "img/esquelis.gif"  
}
function Vezes(){
    num1 = Number(viraNum1.value)
    num2 = Number(viraNum2.value)
    conta = (num1 * num2)
    resultado.innerHTML = (conta) 
    dansa.src = "img/esquelis.gif"  
}
function Dividir(){
    num1 = Number(viraNum1.value)
    num2 = Number(viraNum2.value)
    conta = (num1 / num2)
    resultado.innerHTML = (conta) 
    dansa.src = "img/esquelis.gif"  
}
function limpa(){
    viraNum1.value = ""
    viraNum2.value  = ""
    dansa.src= ""
    resultado.innerHTML = ""
}

//----------------Eventos-------------------

somar.addEventListener('click',Mais)
sub.addEventListener('click',Menos)
mult.addEventListener('click',Vezes)
divi.addEventListener('click',Dividir)
limpar.addEventListener('click',limpa)