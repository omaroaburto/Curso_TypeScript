class Alimento{
    //private nombreAlimento:string;
    //private calorias:number;
    //private pais:string;

    //constructor(a:string, b:number, c:string){
    //    this.nombreAlimento = a;
    //   this.calorias = b;
    //    this.pais = c;
    //}
    constructor(private nombreAlimento:string,private calorias:number, private pais:string){
    }   
}

class Fruta extends Alimento{
    constructor(a:string,b:number, c:string){
        super(a,b,c);
    }
}