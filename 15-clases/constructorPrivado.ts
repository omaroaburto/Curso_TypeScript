class BD{
    static instancia:BD;
    private constructor(public conexion:boolean){

    }
    static conectarBD(){
        if(!BD.instancia){
            BD.instancia = new BD(true)
        }
        return BD.instancia;
    }
}

let conectar = BD.conectarBD();