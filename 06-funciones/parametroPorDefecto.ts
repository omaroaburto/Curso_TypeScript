function empleado(nombre:string, 
                 apellido:string,
                 esEmpleado:boolean=false):string{
    if(esEmpleado){
        return `${nombre} ${apellido} es un empleado`;
    }else{
        return `${nombre} ${apellido} no es un empleado`;
    }
}