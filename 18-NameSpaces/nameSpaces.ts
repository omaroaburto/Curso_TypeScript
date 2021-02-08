namespace Validaciones{
    export function validarTexto(a:string):boolean{
        if(a.length>3){
            return true;
        }else{
            return false;
        }
    }
    export function validarEdad(e:number):boolean{
        if(e>=18){
            return true;
        }else{
            return false;
        }
    }
}
