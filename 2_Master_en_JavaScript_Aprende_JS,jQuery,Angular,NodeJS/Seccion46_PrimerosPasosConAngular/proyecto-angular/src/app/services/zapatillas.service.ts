//importar el injectable para poder inyectarlo en el codigo
import { Injectable } from "@angular/core";
//importar la base con lo que lo usamos
import { zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<zapatilla>;
    constructor(){
        this.zapatillas = [
            new zapatilla('Nike Airmax','Nike','Rojas',40,true),
            new zapatilla('Reebook Clasic','Reebook','Blanco',80,true),
            new zapatilla('Reebook Spartan','Reebook','Negra',180,true),
            new zapatilla('Nike Runner MD','Nike','Negras',60,true),
            new zapatilla('Adidas Yezzy','Adidas','Gris',180,false)
        ]
    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }

    getZapatillas(): Array<zapatilla>{
        return this.zapatillas;
    }
}