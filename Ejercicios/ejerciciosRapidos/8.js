function acceso() {
    var num1=parseInt(document.getElementById("num").value);
    if (num1<18) {
        alert("Acceso denegado");
    } else if (num1>=18 && num1<=65) {
        alert("Acceso permitido");
    } else {
        alert("Acceso VIP");
    }
}