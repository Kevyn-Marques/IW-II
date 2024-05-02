const benio = document.querySelector(".benio")
const pipe = document.querySelector(".pipe")

const jump = ()=>{
    benio.classList.add("pulo")

    setTimeout(()=>{
        benio.classList.remove("pulo");

    },500)
}
const loopGame = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const benPosition = +window.getComputedStyle(benio).bottom.replace('px', ''); 

    if(pipePosition <= 120 && pipePosition > 0 && benPosition < 80 ){ 
        pipe.style.animation = 'none'; 
        pipe.style.left = `${pipePosition}px`; 

        benio.style.animation = 'none'; 
        benio.style.bottom = `${benPosition+25}px`; 

        benio.src = './img/morto.gif';
        benio.style.width = '150px';
        benio.style.marginLeft = '0';

        clearInterval(loopGame);
        clearInterval(pontuacao)
    }

}, 10)

function reiniciar(){
    window.location.reload()
}
function tempo(){
    var score = document.getElementById("score");
    pontos = parseInt(score.textContent);
    pontos++;
    score.textContent = pontos;
}
const pontuacao = setInterval(tempo,100)

document.addEventListener('keydown',jump)