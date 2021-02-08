function sumar(a:number, b:number, c?:number):number{
    if(c){
        return a+b+c;
    }else{
        return a+b;
    }
}

console.log(sumar(5,6,6))
console.log(sumar(4,5));