import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PeticionesService{
    public url: string;
    
    constructor(
        public _http: HttpClient
    ){
        this.url = "https://reqres.in";
    }

    getUser(userId:string): Observable<any>{
        return this._http.get(this.url+"/api/users/"+userId)
    }

    addUser(user:any): Observable<any>{
        //pasamos el user a json 
        let params = JSON.stringify(user);
        //creamos una nueva cabecera
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        //le pasamos el json a la url con los headers
        return this._http.post(this.url+ '/api/users', params, {headers: headers})
    }
}

