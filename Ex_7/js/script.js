const salar = document.getElementById("salar");
const resul = document.getElementById("resul");
const finalz = document.getElementById("finalz");
var nome = ' '
var sal = 0
var aumenta = 0

function reajustar(){
    nome = prompt("Digite o nome do funcionário:");
    sal = prompt("Digite o salário atual de " + nome + ":");
     aumeta = prompt("Digite o reajuste do salário em porcentagem: ");

    sal = Number(sal);
    aumenta = Number(aumenta);
    
    
    var porcen = (sal/100)*aumenta;
    
    resul.innerHTML = "O salário de " + nome + " era de R$" + sal + ",00. Acrescentando " + aumenta + "%, O salário irá aumentar R$"+ porcen + ",00";
    finalz.innerHTML = "Agora seu salário será de R$" + (sal+porcen) + ",00"
}

salar.addEventListener("click", reajustar)
