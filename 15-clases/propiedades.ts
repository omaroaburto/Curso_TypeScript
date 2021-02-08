class InstrumentoMusical{
    private nombre:string;
    public cuerdas:boolean;
    protected electrico:boolean;

    constructor(nombre:string, cuerdas:boolean, electrico:boolean){
        this.nombre =  nombre;
        this.cuerdas = cuerdas;
        this.electrico = electrico;
    }
}

let guitarra:InstrumentoMusical =  new InstrumentoMusical("guitarra", true, false);

