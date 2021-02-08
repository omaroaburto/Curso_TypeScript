interface Xperros{
    nombre:string;
    //propiedad opcional
    poder?:string;
}
function enviarMision1(xmen:Xperros):void{
    console.log("Enviado a: "+xmen.nombre);
}
function enviarCuartel1(xmen:Xperros):void{
    console.log("Enviado al cuartel: "+xmen.nombre);
}

let chocoperro:any={
    nombre:"Chocorine",
}
enviarMision1(chocoperro);
enviarCuartel1(chocoperro);