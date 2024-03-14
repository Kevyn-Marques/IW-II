const peso = document.getElementById("peso")
const altura = document.getElementById("alt")
const gender = document.getElementById("gender")
const calc = document.getElementById("calc")
const novo = document.getElementById("new")
const result = document.getElementById("result")
const tabela = document.getElementById("tabela")
const tab = document.getElementById ("tab")

var heigth;
var mass;
var sex;
var imc;

function final(){
    if (height >=0 && height <=25 && mass> 0){
        if(sex == "mas"){
            if (imc<=18.4){
                tabela.innerHTML = "Abaixo do peso!"
            }
            else if(imc >= 18.5 && imc <= 24.9){
                tabela.innerHTML = "Peso Ideal!"
            }
            else if(imc >= 25.0 && imc <= 29.9){
                tabela.innerHTML = "Sobrepeso!"
            }
            else if(imc >= 30.0 && imc <= 34.9){
                diag.innerHTML = "Obesidade"
            }
            else if(imc >= 35.0 && imc <= 39.9){
                tabela.innerHTML = "Obesidade Severa"
            }
            else if(imc >= 40.0){
                tabela.innerHTML = "Obesidade Mórbida"
            }
        }else{
            if (imc<=18.4){
                tabela.innerHTML = "Abaixo do peso!"
            }
            else if(imc >= 18.5 && imc <= 23.9){
                tabela.innerHTML = "Peso Ideal!"
            }
            else if(imc >= 24.0 && imc <= 28.9){
                tabela.innerHTML = "Sobrepeso!"
            }
            else if(imc >= 29.0 && imc <= 33.9){
                tabela.innerHTML = "Obesidade"
            }
            else if(imc >= 34.0 && imc <= 38.9){
                tabela.innerHTML = "Obesidade Severa"
            }
            else if(imc >= 40.0){
                tabela.innerHTML = "Obesidade Mórbida"
            }
        }
    }
}

function calcular(){
    height = Number(altura.value.replace(",","."))
    mass = Number(peso.value.replace(",","."))
    sex = gender.value
      imc = mass/(height*height)  
      if(height < 0 || heigth >=3){
        result.innerHTML = "erro(Informe uma altura correta)"
      }
      else{
        result.innerHTML = imc.toFixed(2)
     }
     final();
     tab.src = "img/param.png"
}
function limpa(){
    peso.value  = ""
    altura.value = ""
    result.innerHTML = ""
    tabela.innerHTML = ""
}
calc.addEventListener("click",calcular)
novo.addEventListener("click",limpa)