
interface Pais{
    paisNombre:string;
    nombrePais(nombreVegetal:string):void;
}

class vegetal implements Pais{
    private nombreVegetal:string;
    public paisNombre:string;
    constructor(a:string, b:string){
        this.nombreVegetal = a;
        this.paisNombre = b;
    }
    nombrePais(nombreVegetal:string):void{
        console.log(`El nombre del vegental es ${nombreVegetal}`);
    }
}