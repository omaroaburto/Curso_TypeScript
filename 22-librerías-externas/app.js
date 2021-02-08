"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
var sweetalert2_1 = require("sweetalert2");
console.log("Hola mundo");
$(document).ready(function () {
    console.log("pagina lista y cargada");
    $("h1").text("Hola desde TypeScript");
    $("p").text("Hola desde este parrafo...");
    $("body").css("background-color", "#f33");
});
$("#botAlerta").on("click", function () {
    sweetalert2_1.default.fire("Hola Mundo Desde TypeScript...");
});
