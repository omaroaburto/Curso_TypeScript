class Cuadrado {
    constructor(a, b) {
        if (a)
            this.base = a;
        if (b)
            this.altura = b;
    }
    area() {
        if (this.altura && this.base) {
            return +this.base * +this.altura;
        }
        else {
            return 0;
        }
    }
}
let cuadrado = new Cuadrado();
cuadrado.base = "10";
cuadrado.altura = 10;
console.log(cuadrado.area());
