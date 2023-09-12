//interface
interface CamisetaBase{ //la interface nos dice que si o si deben existir estos metodos
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo:string){ //adiciona una nueva funcion a una clase 
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("camiseta estampada con el logo de: "+logo);
        }
    }
}

//clase (molde del objeto)
class Camiseta{ //linea que nos dice que podra ser exportado a otro tipo de archivos  

    //propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Métodos (funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){ //constructor
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }
}

//clase hija 
class Sudadera extends Camiseta{ //diciendo que es hija de camiseta
    public capucha: boolean;

    setCapucha(capucha){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

