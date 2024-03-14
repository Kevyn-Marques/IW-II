const compra = document.getElementById("compra")
const buy = document.getElementById("buy")
var produto = " "
var preco = 0
receba = 0 
recebido = 0
caro = 0
troco = 0

function shop(){
    produto = prompt("Que produto que comprar?")
    preco = prompt("Qual o valor do produto?")
    receba = prompt("Quanto vai pagar?")
    recebido = Number(receba)
    caro = Number(preco)
    troco = (recebido - caro) 
    buy.innerHTML = ("Você quer comprar um " + produto + " por R$: " + preco + " seu troco será de R$: " + troco)

}

compra.addEventListener('click',shop)