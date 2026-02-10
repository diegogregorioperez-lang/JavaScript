var resultado=confirm("¿Quieres hacer una operación aritmética? (yo de ti la hacía)");
console.log(resultado);
if (resultado==true) {
    var num1=parseInt(prompt("Introduce el primer número: "));
    var num2=parseInt(prompt("Introduce el segundo número: "));
    alert("Suma de los dos: "+(num1+num2));
    console.log("Suma de los dos: "+(num1+num2));
}