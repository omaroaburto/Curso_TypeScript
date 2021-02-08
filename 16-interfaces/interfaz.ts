interface Xmen{
    nombre:string;
    poder:string;
}
function enviarMision(xmen:Xmen):void{
    console.log("Enviado a: "+xmen.nombre);
}
function enviarCuartel(xmen:Xmen):void{
    console.log("Enviado al cuartel: "+xmen.nombre);
}

let wolverine:any={
    nombre:"wolverine",
}
enviarMision(wolverine);
enviarCuartel(wolverine);
