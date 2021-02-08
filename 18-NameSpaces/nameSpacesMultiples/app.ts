/// <reference path="./validate/edad.ts"/>
/// <reference path="./validate/texto.ts"/>
if(validate.edad(18)){
    console.log("Usted es mayor de edad");
}else{
    console.log("Usted es menor de edad");
}
if(validate.texto("omaro")){
    console.log("Su nombre es válido");
}else{
    console.log("Su nombre es inválido");
}