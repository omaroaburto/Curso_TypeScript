var Validaciones;
(function (Validaciones) {
    function validarTexto(a) {
        if (a.length > 3) {
            return true;
        }
        else {
            return false;
        }
    }
    Validaciones.validarTexto = validarTexto;
    function validarEdad(e) {
        if (e >= 18) {
            return true;
        }
        else {
            return false;
        }
    }
    Validaciones.validarEdad = validarEdad;
})(Validaciones || (Validaciones = {}));
