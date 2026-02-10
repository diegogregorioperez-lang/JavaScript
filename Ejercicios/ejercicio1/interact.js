var resultado=confirm("¿Quieres realizar una operación aritmética?");
console.log(resultado);
if (resultado==true) {
    var num1=parseInt(prompt("Introduce el primer número: "));
    var num2=parseInt(prompt("Introduce el segundo número número: "));
    console.log("Suma de los dos números: "+(num1+num2));
}