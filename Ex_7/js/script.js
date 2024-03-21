const salar = document.getElementById("salar");
const resul = document.getElementById("resul");
const finalz = document.getElementById("finalz");
var nome = ' '

function reajustar(){
    nome = prompt("Digite o nome do funcionário:");
    var aumentar = prompt("Digite o salário atual de " + nome + ":");
    var sal = prompt("Digite o reajuste do salário em porcentagem: ");

    sal = Number(sal);
    aumentar = Number(aumentar);
    
    
    var porcen = (sal/100)*aumentar;
    
    resul.innerHTML = "O salário de " + nome + " era de R$" + aumentar + ",00. Acrescentando " + sal + "%, O salário irá aumentar R$"+ porcen + ",00";
    finalz.innerHTML = "Agora seu salário será de R$" + (aumentar+porcen) + ",00"
}

salar.addEventListener("click", reajustar)
