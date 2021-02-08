var capitanAmerica = {
    amigo: "Hulk",
    darOrden: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.amigo + " al ataque");
        }, 1000);
    }
};
capitanAmerica.darOrden();
