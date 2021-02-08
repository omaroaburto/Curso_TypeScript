interface DosNumerosFunc{
    (num1:number,num2:number):number;
}
let sumarNumeros:DosNumerosFunc;
sumarNumeros = (a:number,b:number)=>{
    return a+b;
}

let restarNumeros:DosNumerosFunc;
restarNumeros = (a:number,b:number)=>{
    return a-b;
}