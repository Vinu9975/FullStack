import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../_class/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  constructor(private http: HttpClient) 
  { 
    
  }
  
  addTicket(ticket:Ticket):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    return this.http.post("http://localhost:3000/api/ticket/addTicket",ticket,{headers:headers})
  }
  getTickets() {
    return this.http.get("http://localhost:3000/api/ticket/get");
  }

  updateTicket(id:any,desc:any,UpdateDate:String){
    return this.http.put(`http://localhost:3000/api/ticket/${id}`,{desc,UpdateDate})
  }

  DelTicket(id:any,isDelete:boolean,DeleteDate:string){
    return this.http.put(`http://localhost:3000/api/ticket/del/${id}`,{isDelete,DeleteDate})
  }

  
}
