
type Perro = {
    nombre:string,
    edad:number,
    descripcion:string[], 
    getNombre:()=>string    
}
let choco:Perro={
    nombre:"choco",
    edad:15,
    descripcion:["negro", "pequeño","hermoso"],
    getNombre(){
        return this.nombre;
    }
}
let rubio:Perro={
    nombre:"rubio",
    edad:15,
    descripcion:["rubio", "mediano","hermoso"],
    getNombre(){
        return this.nombre;
    }
}