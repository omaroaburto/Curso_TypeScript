// Crear interfaces
function conducirBatimovil(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
}
let batimovil1 = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... run!!!");
    }
};
let guason = {
    reir: true,
    comer: true,
    llorar: false
};
function reir(guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}
let ciudadGotica;
ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Chileno {
    constructor(a, b, c, d) {
        this.nombre = a;
        this.edad = b;
        this.sexo = c;
        this.estadoCivil = d;
    }
    imprimirBio() {
        let mensaje = ` Datos:
                        nombre: ${this.nombre}
                        edad: ${this.edad}
                        sexo: ${this.sexo}
                        Estado Civil: ${this.estadoCivil}
                      `;
        console.log();
    }
}
