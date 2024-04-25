const benio = document.querySelector(".benio")

const jump = ()=>{
    benio.classList.add("pulo")

    setTimeout(()=>{
        benio.classList.remove("pulo");

    },500)
}
const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft
    
    if(pipePosition <= 120){
        pipe.style.animation = "none"
        pipe.style.left = `$(pipePosition)px`
    }
}, 10)

document.addEventListener('keydown',jump)