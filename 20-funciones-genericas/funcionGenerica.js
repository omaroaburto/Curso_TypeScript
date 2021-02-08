function regresar(args) {
    return args;
}
console.log(regresar(1).toFixed(1));
console.log(regresar("nombre").toUpperCase());
console.log(regresar(new Date).getDate());
let redHood = {
    nombre: "Red Hood",
    nombreReal: "Jason Todd",
    poder: "Agilidad y experto en armas",
};
function funcionGenerica(v) {
    return v;
}
console.log(funcionGenerica(redHood));
