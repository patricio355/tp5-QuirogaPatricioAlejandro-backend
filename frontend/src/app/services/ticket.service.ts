import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  urlBase:string = "http://localhost:3000/api/"
  constructor(private _http: HttpClient) { }
 
  getTickets():Observable<any>{
    let httpOptions ={
      headers : new HttpHeaders ({

      }),
    params : new HttpParams()
    }
    
    return this._http.get(this.urlBase + "ticket",httpOptions);
  }
  getCategoria(cat:string){
    let httpOptions ={
      headers : new HttpHeaders ({

      }),
    params : new HttpParams().append("categoria",cat)
    }
    
    return this._http.get(this.urlBase + "ticket/categoria" ,httpOptions);
  }

  deleteTicket(id : string):Observable<any>{
    let httpOptions ={
      headers : new HttpHeaders ({

      }),
    params : new HttpParams()
    }
    
    return this._http.delete(this.urlBase + "ticket/" + id,httpOptions);
  }

  editTicket(ticket:Ticket):Observable<any>{
    let httpOptions ={
      headers : new HttpHeaders ({
        "Content-Type": "application/json"
      }),
    params : new HttpParams()
    }
    let body = JSON.stringify(ticket);
    return this._http.put(this.urlBase + "ticket/" + ticket._id,body,httpOptions);
  }

  getTicket(id : string):Observable<any>{
    let httpOptions ={
      headers : new HttpHeaders ({

      }),
    params : new HttpParams()
    }
    
    return this._http.get(this.urlBase + "ticket/" + id,httpOptions);
  }

  newTicket(ticket:Ticket):Observable<any>{
    let httpOptions ={
      headers : new HttpHeaders ({
        "Content-Type": "application/json"
      }),
    params : new HttpParams()
    }

    let body = JSON.stringify(ticket)
    
    return this._http.post(this.urlBase + "ticket",body,httpOptions);
    
  }

  
}
