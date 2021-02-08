function enviarNombre(mineral) {
    console.log("El nombre del mineral es " + mineral.nombre);
    mineral.enviarPrecio(199);
}
let oro = {
    nombre: "oro",
    enviarPrecio(x) {
        console.log("El precio es: " + x);
    }
};
enviarNombre(oro);
