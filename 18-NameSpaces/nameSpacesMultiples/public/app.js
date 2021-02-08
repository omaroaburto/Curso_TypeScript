var validate;
(function (validate) {
    function edad(a) {
        if (a >= 18) {
            return true;
        }
        else {
            return false;
        }
    }
    validate.edad = edad;
})(validate || (validate = {}));
var validate;
(function (validate) {
    function texto(a) {
        if (a.length > 3) {
            return true;
        }
        else {
            return false;
        }
    }
    validate.texto = texto;
})(validate || (validate = {}));
/// <reference path="./validate/edad.ts"/>
/// <reference path="./validate/texto.ts"/>
if (validate.edad(18)) {
    console.log("Usted es mayor de edad");
}
else {
    console.log("Usted es menor de edad");
}
if (validate.texto("omaro")) {
    console.log("Su nombre es válido");
}
else {
    console.log("Su nombre es inválido");
}
