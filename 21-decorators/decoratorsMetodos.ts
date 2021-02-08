
function editable(esEditable:boolean){
    return function(target:any, nombrePropiedad:string, descriptor:PropertyDescriptor){
        descriptor.writable = esEditable;
    }
}

class gatos{
    constructor(public nombre:string){}
    @editable(true)
    plan(){
        console.log("Es dominar el mundo");
    }
}

let lex = new gatos("Chanchoman");
lex.plan = function(){
    console.log("obj");
}

lex.plan()