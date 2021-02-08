import "jquery";
import Swal from "sweetalert2";
console.log("Hola mundo");

$(document).ready(function(){
    console.log("pagina lista y cargada");
    $("h1").text("Hola desde TypeScript");
    $("p").text("Hola desde este parrafo...");
    $("body").css("background-color","#f33");
});
$("#botAlerta").on("click",function(){
   
    Swal.fire("Hola Mundo Desde TypeScript...")
});
