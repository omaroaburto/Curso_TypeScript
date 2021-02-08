function planAmigos(constructor:Function){
    constructor.prototype.imprimirPlan = function(){
        console.log(this);
    }
}

function imprimible( constructor:Function){
    constructor.prototype.imprimir = function(){
        console.log(this);
    }
}

@imprimible
@planAmigos
class amigos{
    constructor(public nombre:string){

    }
}

let pedro = new amigos("pedro");

(<any>pedro).imprimirPlan();
(<any>pedro).imprimible();