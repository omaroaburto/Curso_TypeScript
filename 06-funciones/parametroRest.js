function nombreCompleto(nombre) {
    var otrosDatos = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otrosDatos[_i - 1] = arguments[_i];
    }
    return nombre + " " + otrosDatos.join(" ");
}
console.log(nombreCompleto("Omaro", "Alexis", "Aburto", "Leiva"));
