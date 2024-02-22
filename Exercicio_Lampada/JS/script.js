//---------------Definição de variaveis---------

const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const conserta = document.getElementById('conserta');
const lamp =  document.getElementById('lamp');

//--------------------Funções----------------
function ta_ruim(){
    return lamp.src.indexOf('quebrada') > -1
    //-----------Retorna True ou False----------------
       
}
function lamp_ligou(){
    if (!ta_ruim()){
        lamp.src='img/ligada.jpg'
    }
}
function lamp_desligar(){
    if (!ta_ruim()){
        lamp.src='img/desligada.jpg'
    }
}
function regen(){
    if(ta_ruim){
        lamp.src='img/desligada.jpg'
    }
}
function quebrou(){
    lamp.src='img/quebrada.jpg'
}

//--------------------Eventos-------------------

ligar.addEventListener('click',lamp_ligou)
desligar.addEventListener('click',lamp_desligar)
conserta.addEventListener('dblclick',regen)
lamp.addEventListener('dblclick',quebrou)
lamp.addEventListener('mouseover',lamp_ligou)
lamp.addEventListener('mouseleave',lamp_desligar)
