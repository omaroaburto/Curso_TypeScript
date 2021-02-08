let capitanAmerica = {
    amigo: "Hulk",
    darOrden:function(){
        setTimeout(()=>{
            console.log(this.amigo+" al ataque");
        },1000)
    }
}

capitanAmerica.darOrden();