var num1=parseInt(prompt("Dime el primer número"));
var num2=parseInt(prompt("Dime el segundo número"));
var operacion=prompt("Elige la operacion (+,-,*,/)");

if (operacion=="+") {
    alert("La suma es: "+(num1+num2));
} else if (operacion=="-") {
    alert("La resta es: "+(num1-num2));
} else if (operacion=="*") {
    alert("La multiplicación es: "+(num1*num2));
} else if (operacion=="/") {
    alert("La división es: "+(parseFloat(num1)/num2));
}