// Funciones Básicas
function sumar( a:number, b:number ):number{
  return a + b;
}

let contar = function( heroes:String[]):number{
  return heroes.length;
}
let superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];

let valor:number = contar(superHeroes);

//Parametros por defecto
function llamarBatman( llamar:boolean = true ):void{
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
function unirheroes(  ...personas:string[] ){
  return personas.join(", ");
}


// Tipo funcion
function noHaceNada( numero:number, texto:string, booleano:boolean, arreglo:any[] ){
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco:(a:number, b:string, c:boolean, d:any[])=>void;
