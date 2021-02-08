function regresar<T>(args:T){
    return args;
}
console.log(regresar(1).toFixed(1));
console.log(regresar("nombre").toUpperCase());
console.log(regresar(new Date).getDate());


type Heroe1={
    nombre:string;
    nombreReal:string;
}
type Villano1={
    nombre:string;
    poder:string;
}

let redHood = {
    nombre: "Red Hood",
    nombreReal: "Jason Todd",
    poder: "Agilidad y experto en armas",
}
function funcionGenerica<T>(v:T){
    return v;
}
console.log( funcionGenerica<Villano1>(redHood) );