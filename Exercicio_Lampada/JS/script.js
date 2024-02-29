//---------------Definição de variaveis---------

const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const conserta = document.getElementById('conserta');
const lamp =  document.getElementById('lamp');
var ligada = false;

//--------------------Funções----------------
function ta_ruim(){
    return lamp.src.indexOf('quebrada') > -1
    //-----------Retorna True ou False----------------
       
}
function ligoudesligou(){
    if (!ta_ruim()){
        if(!ligada){
         lamp.src='img/ligada.jpg'
         ligada = true
         texto.innerHTML = "Ligou!!!!!"
        }
        else if(ligada){
            lampada.src = "img/desligada.jpg"
            ligada = false
            texto.innerHTML = "Desligou:/"
        }
    }
}
function regen(){
    if(ta_ruim){
        lamp.src='img/desligada.jpg'
        texto.innerHTML = "Consertada mlk!"
    }
}
function quebrou(){
    lamp.src='img/quebrada.jpg'
    texto.innerHTML = "NAAAAO QUEBRO!!!"
}

//--------------------Eventos-------------------

ligar.addEventListener('click',ligoudesligou)
conserta.addEventListener('dblclick',regen)
lamp.addEventListener('dblclick',quebrou)
lamp.addEventListener('mouseover',ligoudesligou)
