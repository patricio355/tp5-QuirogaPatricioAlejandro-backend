import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  urlBase:string = "http://localhost:3000/api/"
  constructor(private _http: HttpClient) { }
 
  getTransacciones():Observable<any>{
    let httpOptions ={
      headers : new HttpHeaders ({

      }),
    params : new HttpParams()
    }
    
    return this._http.get(this.urlBase + "transaccion",httpOptions);
  }

  getConversion(de : string , to : string ,amount:number):Observable<any>{
    // funciona s / portugues
    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'e1362786bdmsh6faebb9d2c83124p1e9925jsn0e80f91257b5',
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
      })
  
    }
  
  
    return this._http.get("https://currency-converter18.p.rapidapi.com/api/v1/convert?from="+de+"&to="+to+"&amount="+amount, httpOption);
  }
  
  altaDeTransaccion(transaccion:Transaccion):Observable<any>{
    let httpOptions ={
      headers : new HttpHeaders ({
        "Content-Type": "application/json"
      }),
    params : new HttpParams()
    }
    let body = JSON.stringify(transaccion)
    console.log(transaccion)
    return this._http.post(this.urlBase + "transaccion",body,httpOptions)
  }
  

  getPorFiltro(origen:string,destino:string):Observable<any>{
    let httpOptions ={
      headers : new HttpHeaders ({

      }),
    params : new HttpParams()
    .set('origen',origen)
    .set('destino',destino)
    }
    
    return this._http.get(this.urlBase + "transaccion/divisa",httpOptions);
  }

}
