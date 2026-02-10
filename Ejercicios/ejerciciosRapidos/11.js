    var num2=parseInt(Math.random()*10)+1;
function adivina() {
    var num1=parseInt(document.getElementById("num").value);
    if (num1=num2) {
        document.getElementById("escribir").innerHTML="¡HAS ACERTADO!";
    } else {
        document.getElementById("escribir").innerHTML="Ese no era... Sigue intentándolo";
    }
}