const bt = document.getElementById("calc");
const calcular = document.getElementById("calcular");
const resultados = document.getElementById("resultados");

function calcu(){
    var a = prompt("Digite o valor de a:");
    var b = prompt("Digite o valor de b:");
    var c = prompt("Digite o valor de c:");

    var del = b*b - 4*a*c;
    calcular.innerHTML = "O cálculo realizado será &Delta; = " + b + "<sup>2</sup> - " + "4." + a + "." + c
    resultados.innerHTML = "O valor calculado foi &Delta; = " + del;
}

bt.addEventListener("click", calcu);
