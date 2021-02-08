class Colegios {
    constructor(nombreColegio, cantidadAlumnos, direccion, municipal) {
        this.nombreColegio = nombreColegio;
        this.cantidadAlumnos = cantidadAlumnos;
        this.direccion = direccion;
        this.municipal = municipal;
    }
    datos() {
        let datos = `Datos de colegio
                            Nombre colegio: ${this.nombreColegio}
                            N° alumnos: ${this.cantidadAlumnos}
                            Dirección: ${this.direccion}
                            Municipal ${this.municipal === true ? "si" : "no"}
                        `;
        return datos;
    }
}
let liceoCoronel = new Colegios("Liceo de Coronel", 3000, "Yacimiento Mineral #477", true);
console.log(liceoCoronel.datos());
