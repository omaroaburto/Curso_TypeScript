function nombreCompleto(nombre:string, ...otrosDatos:String[]):string{
    return nombre+" "+otrosDatos.join(" ");
}

console.log(nombreCompleto("Omaro","Alexis","Aburto","Leiva"));