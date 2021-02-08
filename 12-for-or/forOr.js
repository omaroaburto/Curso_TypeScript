let batman1 = {
    nombre: "Bruce",
    arma: "bati-armas",
};
let superman1 = {
    nombre: "clark",
    arma: "puños",
};
let aquaman1 = {
    nombre: "arthur",
    arma: "tridente",
};
let heroes = [batman1, superman1, aquaman1];
for (let I of heroes) {
    console.log(`${I.nombre},${I.arma}`);
}
