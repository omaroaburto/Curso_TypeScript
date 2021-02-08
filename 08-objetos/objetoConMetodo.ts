let unHeroe:{nombre:string,
            edad:number,
            poderes:string[],
            getNombre:()=>string
            }= {
    nombre: "flash",
    edad: 32,
    poderes: ["super velocidad", "viajar en el tiempo", "atravesar la materia"],
    getNombre(){
        return this.nombre;
    }
};