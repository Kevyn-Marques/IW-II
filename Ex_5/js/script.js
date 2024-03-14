const compra = document.getElementById("compra")
const buy = document.getElementById("buy")
var produto = " "
var preco = " "

function shop(){
    produto = prompt("Que produto que comprar?")
    preco = prompt("Qual o valor do produto?")
    buy.innerHTML = ("Você quer comprar um " + produto + " por R$: " + preco)
}

compra.addEventListener('click',shop)