function par_impar() {
    var numero=parseInt(document.getElementById("num").value);
    if (numero%2==0) {
        document.getElementById("escribir").innerHTML="Es Par";
    } else {
        document.getElementById("escribir").innerHTML="Es Impar";
    }
}
