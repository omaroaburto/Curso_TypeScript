class Animal {
    nombre:string;
    edad:number;
    especie:string;

    constructor(a:string, b:number, c:string) {
        this.nombre = a;
        this.edad = b;
        this.especie = c;
    }
}

let mascota:Animal = new Animal("Choco",12,"Perro");