namespace validate{
    export function texto(a:string):boolean{
        if(a.length>3){
            return true;
        }else{
            return false;
        }
    }
}