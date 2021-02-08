class BD {
    constructor(conexion) {
        this.conexion = conexion;
    }
    static conectarBD() {
        if (!BD.instancia) {
            BD.instancia = new BD(true);
        }
        return BD.instancia;
    }
}
let conectar = BD.conectarBD();
