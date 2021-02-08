class Cuadrado<T extends number | string>{
    base?:T;
    altura?:T;
    constructor(a?:T,b?:T){
        if(a)this.base = a;
        if(b)this.altura = b;

    }
    area():number{
        if(this.altura && this.base){
            return +this.base * +this.altura;
        }else{
            return 0;
        }
    }
}

let cuadrado = new Cuadrado<number | string>();

cuadrado.base ="10";
cuadrado.altura = 10;
console.log(cuadrado.area());