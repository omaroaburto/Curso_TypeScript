type heroe = {
    nombre:string,
    arma:string
}
let batman1: heroe = {
    nombre: "Bruce",
    arma: "bati-armas",
}
let superman1: heroe = {
    nombre: "clark",
    arma: "puños",
}

let aquaman1: heroe = {
    nombre: "arthur",
    arma: "tridente",
}

let heroes = [batman1, superman1, aquaman1];
for(let I of heroes){
    console.log(`${I.nombre},${I.arma}`)
}