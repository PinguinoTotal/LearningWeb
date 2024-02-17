//Interface
//la interface obliga a la clase a tener estas funciones 
interface CamisetaBase{
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+logo);
        }
    }
}

// Clase (molde del objeto)
class Camiseta implements CamisetaBase{
    //Propiedades(Caracteristicas del obejto)
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;

    //PUBLIC
    /*Podemos accesar a esta clase desde cualquier lugar de el codigo */
    //PROTECTEC
    //solo entran miembros de la familia 
    //PRIVATE
    //solo dentro de la clase 

    //Métodos (funciones o acciones del objeto4)
    constructor(color, modelo, marca, talla, precio){
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

var camiseta = new Camiseta("Rojo","Manga Larga","nike","L",10);

class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

var sudadera_nike = new Sudadera("Rojo","Manga Larga","nike","L",10);
//tiene el constructor de la camiseta porque es su hija
sudadera_nike.setColor("verde");
//tiene la funcion set color porque lo hereda de su padre camiseta
sudadera_nike.capucha = true;
// y tiene us propias variables 
