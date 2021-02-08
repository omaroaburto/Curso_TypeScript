interface Minerales{
    nombre:string;
    precio?:number;
    enviarPrecio(precioR:number):void;
}

function enviarNombre(mineral:Minerales){
    console.log("El nombre del mineral es "+mineral.nombre);
    mineral.enviarPrecio(199);
}

let oro={
    nombre:"oro",
    enviarPrecio(x:number):void{
        console.log("El precio es: "+x);
    }
}
 enviarNombre(oro);