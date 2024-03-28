/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'
//titulo.innerHTML = 'Aula Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/escueleto.gif')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "red";
titulo.style.color = "red";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "2px solid red";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";

//let box = document.querySelectorAll('.box')
//box[0].setAttribute('class', 'escura')
//box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let chicle = document.querySelector('#rosado')

let banana = document.querySelector('#amarelou')

let friagem = document.querySelector('#azulao')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
chicle.addEventListener('click',rosio)
banana.addEventListener('click',yello)
friagem.addEventListener('click',benio)

function modoDark() {
    //event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove('azul')
    tela.classList.remove('amarelo')
    tela.classList.remove("rosa")
    imagem.src = "img/DARK.gif"
}

function modoLight() {
    //event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.remove("rosa")
    tela.classList.remove('azul')
    tela.classList.remove('amarelo')
    tela.classList.add("light");
    imagem.src = "img/escueleto.gif"
}
function rosio(){
    console.log('Tá rosio')
    tela.classList.remove("dark")
    tela.classList.remove("light")
    tela.classList.add("rosa")
    imagem.src = "img/BOLO.gif"
    
}
function yello(){
    console.log('Amarelou meu raio de sol?')
    tela.classList.remove("dark")
    tela.classList.remove("light")
    tela.classList.remove("rosa")
    tela.classList.remove('azul')
    tela.classList.add('amarelo')
    imagem.src = "img/AMARELO.gif"
    
}
function benio(){
    console.log('isfrio')
    tela.classList.remove("dark")
    tela.classList.remove("light")
    tela.classList.remove('rosa')
    tela.classList.remove('amarelo')
    tela.classList.add('azul')
    imagem.src = "img/AZUL.gif"
    
}