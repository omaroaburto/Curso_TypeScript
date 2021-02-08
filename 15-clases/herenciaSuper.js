class Alimento {
    //private nombreAlimento:string;
    //private calorias:number;
    //private pais:string;
    //constructor(a:string, b:number, c:string){
    //    this.nombreAlimento = a;
    //   this.calorias = b;
    //    this.pais = c;
    //}
    constructor(nombreAlimento, calorias, pais) {
        this.nombreAlimento = nombreAlimento;
        this.calorias = calorias;
        this.pais = pais;
    }
}
class Fruta extends Alimento {
    constructor(a, b, c) {
        super(a, b, c);
    }
}
