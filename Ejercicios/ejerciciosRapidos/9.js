function Mostrar() {
    var num1=parseInt(document.getElementById("num").value);
    switch (num1) {
        case 1: document.getElementById("escribir").innerHTML="Tu número se corresponde con el Lunes"; break;
        case 2: document.getElementById("escribir").innerHTML="Tu número se corresponde con el Martes"; break;
        case 3: document.getElementById("escribir").innerHTML="Tu número se corresponde con el Miércoles"; break;
        case 4: document.getElementById("escribir").innerHTML="Tu número se corresponde con el Jueves"; break;
        case 5: document.getElementById("escribir").innerHTML="Tu número se corresponde con el Viernes"; break;
        case 6: document.getElementById("escribir").innerHTML="Tu número se corresponde con el Sábado"; break;
        case 7: document.getElementById("escribir").innerHTML="Tu número se corresponde con el Domingo"; break;
        default: document.getElementById("escribir").innerHTML="No has introducido un número válido"; break;
    }
}