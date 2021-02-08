class Ropa {
    constructor(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
}
let camisa = new Ropa(1);
console.log(camisa.id);
camisa.id = 2;
