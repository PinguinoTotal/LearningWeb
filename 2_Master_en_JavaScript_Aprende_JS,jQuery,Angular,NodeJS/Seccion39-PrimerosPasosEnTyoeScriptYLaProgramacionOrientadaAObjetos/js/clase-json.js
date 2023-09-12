var bicicleta = {
    color: "rojo",
    modelo: "bmx",
    frenos: "disco",
    velocidadMaxima: "60km",
    cambiaColor: function(nuevo_color){
        //bicicleta.color = nuevo:color
        this.color = nuevo_color;
        console.log(this);
    }
}

bicicleta.cambiaColor("azul");