export class Zapatilla{

    //esto se puede hacer, es crear variables y darles valores en el constructor
    /*
    public nombre: string;
    public marca: string;
    public color: string;
    public precio: number;
    public stock: boolean;

    constructor(nombre:string, marca:string, color:string, precio:number, stock:boolean){
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }
    */

    //pero se puede hacer esto tambien 
    constructor(
        public nombre:string,
        public marca:string,
        public color:string,
        public precio:number,
        public stock:boolean
    ){}
}