abstract class Humanos{
    public _nombre:string;
    public _edad:number;

    constructor(a:string, b:number){
        this._nombre = a;
        this._edad = b;
    }
}

class Latino extends Humanos{
    
}

let juan:Latino = new Latino("Juan",15);