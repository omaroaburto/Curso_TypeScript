// Tipos
let nombreBatman:string = "Bruce";
let nombreSuperman:string = "Clark";

var existe:boolean = false;

// Tuplas
var parejaHeroes:[String,String] = [nombreBatman,nombreSuperman];
var villano:[String, number, boolean] = ["Lex Lutor",5,true];

// Arreglos
var aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum fuerza{
  fuerzaAcuaman = 0,
  fuerzaBatman = 1,
  fuerzaFlash = 5,
  fuerzaSuperman = 100,
  
}


// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder = "100";
let largoDelPoder = (<string>poder).length;
console.log( largoDelPoder );
