import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatillas"; //importando la clase zapatillas

@Component({
    selector:'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
    public titulo: string = 'componente de zapatillas'
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public mi_marca: string;

    constructor(){
        this.mi_marca = "Fila";
        this.marcas = Array(); //inicializando marcas 
        this.color = "blue";
        this.zapatillas = [
            new Zapatilla("Nike Airmax", "Nike", "Rojas", 40, true),
            new Zapatilla("Reebok Classic", "Reebok", "Blanco", 80, true),
            new Zapatilla("Reebok Spartan", "Reebok", "Negra", 180, true),
            new Zapatilla("Nike Runner MD", "Nike", "Negras", 60, true),
            new Zapatilla("Adidas Yezzy", "Adidas", "Gris", 180, false),
        ]
    }

    ngOnInit() {
        console.log(this.zapatillas);

        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) =>{ //añadiendo marcas a un string
            if(this.marcas.indexOf(zapatilla.marca)<0){
                this.marcas.push(zapatilla.marca);
            }
        });
        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index: any){
        //delete this.marcas[index]; elimina el elemento pero lo deja indefinido 
        this.marcas.splice(index,1); //quita el elemento totalmente 
    }

    onBlur(){
        console.log("has dejado el elemento blur");
    }

    mostrarPalabra(){
        alert(this.mi_marca);
    }
}