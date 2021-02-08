function enviarMision(xmen) {
    console.log("Enviado a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviado al cuartel: " + xmen.nombre);
}
let wolverine = {
    nombre: "wolverine",
};
enviarMision(wolverine);
enviarCuartel(wolverine);
