const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")
const qbutao = document.getElementById("qbutao")

function bota1(){
    qbutao.innerHTML = "Você clicou no botão 1"
}
function bota2(){
    qbutao.innerHTML = "Você clicou no botão 2"
}
function bota3(){
    qbutao.innerHTML = "Você clicou no botão 3"
}

b1.addEventListener('click', bota1)
b2.addEventListener('click', bota2)
b3.addEventListener('click', bota3)
