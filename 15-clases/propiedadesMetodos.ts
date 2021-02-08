class Colegios{
    private nombreColegio:string;
    private cantidadAlumnos:number;
    private direccion:string;
    private municipal:boolean;

    constructor(nombreColegio:string, cantidadAlumnos:number, direccion:string, municipal:boolean){
        this.nombreColegio = nombreColegio;
        this.cantidadAlumnos = cantidadAlumnos;
        this.direccion = direccion;
        this.municipal = municipal;
    }

    public datos():string{
        let datos:string = `Datos de colegio
                            Nombre colegio: ${this.nombreColegio}
                            N° alumnos: ${this.cantidadAlumnos}
                            Dirección: ${this.direccion}
                            Municipal ${ this.municipal===true?"si":"no"}
                        `;                     
        return datos;
    }
}

let liceoCoronel:Colegios =  new Colegios("Liceo de Coronel",3000,"Yacimiento Mineral #477",true);
console.log(liceoCoronel.datos());
 