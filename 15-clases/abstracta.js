class Humanos {
    constructor(a, b) {
        this._nombre = a;
        this._edad = b;
    }
}
class Latino extends Humanos {
}
let juan = new Latino("Juan", 15);
