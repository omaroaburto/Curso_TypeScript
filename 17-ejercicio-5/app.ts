// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Vehiculo1{
  encender:boolean;
  velocidadMaxima:number;
  acelear():void;
}

function conducirBatimovil( auto:Vehiculo1 ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

let batimovil1: Vehiculo1 = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface MiVillano{
  reir?:boolean;
  comer?:boolean;
  llorar?:boolean;
}

let guason: MiVillano = {
  reir: true,
  comer:true,
  llorar:false
}

function reir( guason:MiVillano ):void{
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface Ciudad{
  (ciudadanos:string[]):number;
}

let ciudadGotica:Ciudad;

ciudadGotica = ( ciudadanos:string[] ):number=>{
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
interface Persona{
    nombre:string,
    edad:number,
    sexo:string,
    estadoCivil:string,
    imprimirBio():void;
}

class Chileno implements Persona{
    nombre:string;
    edad:number;
    sexo:string;
    estadoCivil:string;
    
    constructor(a:string, b:number, c:string, d:string){
        this.nombre =a ;
        this.edad = b;
        this.sexo = c;
        this.estadoCivil = d;
    }
    public imprimirBio():void{
        let mensaje = ` Datos:
                        nombre: ${this.nombre}
                        edad: ${this.edad}
                        sexo: ${this.sexo}
                        Estado Civil: ${this.estadoCivil}
                      `;
        console.log()
    }
}
