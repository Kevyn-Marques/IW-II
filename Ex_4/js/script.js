const red = document.getElementById("red")
const green = document.getElementById("green")
const blue = document.getElementById("blue")
const cor = document.getElementById("cor")

function vermelho(){
    cor.style.color = "#FF0000"
}
function verde(){
    cor.style.color = "#008000"
}
function azul(){
    cor.style.color = "#0000FF"
}

red.addEventListener('click', vermelho)
green.addEventListener('click',verde)
blue.addEventListener('click', azul)
