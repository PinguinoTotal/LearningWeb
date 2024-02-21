import { Component, OnInit } from "@angular/core";
import { zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatillas.service";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "Copmponente de zapatillas";

    public zapatillas: Array<zapatilla> = [];
    public marcas: String[];
    public color: string;

    public mi_marca:string;

    constructor(
        public _zapatillaService: ZapatillaService
    ){
        this.mi_marca = "fila"
        this.color = 'yellow';
        this.marcas = new Array();

        this.zapatillas = _zapatillaService.getZapatillas();
    }

    ngOnInit(){
        this.zapatillas = this._zapatillaService.getZapatillas();
        alert(this._zapatillaService.getTexto());
        this.getMarcass();
    }

    getMarcass(){
        this.zapatillas.forEach((zapatilla, index) =>{
            if (this.marcas.indexOf(zapatilla.marca) < 0) {
                this.marcas.push(zapatilla.marca)
            }
        });
    }

    getMarca(){
        alert(this.mi_marca)
    }

    addMarca(){
        if(this.marcas.indexOf(this.mi_marca)<0){
            this.marcas.push(this.mi_marca);
        }
    }

    borrarMarca(index:number){
        this.marcas.splice(index,1);
    }

    OnBlur(){
        console.log("has salido de el cuadro de texto");
    }

    mostrarPalabra(){
        alert(this.mi_marca)
    }
}