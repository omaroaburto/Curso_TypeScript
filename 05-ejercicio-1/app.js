// Tipos
var nombreBatman = "Bruce";
var nombreSuperman = "Clark";
var existe = false;
// Tuplas
var parejaHeroes = [nombreBatman, nombreSuperman];
var villano = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var fuerza;
(function (fuerza) {
    fuerza[fuerza["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    fuerza[fuerza["fuerzaBatman"] = 1] = "fuerzaBatman";
    fuerza[fuerza["fuerzaFlash"] = 5] = "fuerzaFlash";
    fuerza[fuerza["fuerzaSuperman"] = 100] = "fuerzaSuperman";
})(fuerza || (fuerza = {}));
// Retorno de funciones
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
