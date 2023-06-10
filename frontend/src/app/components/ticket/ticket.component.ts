import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{

ngOnInit(): void {
}
  filtro!:Array<Ticket>;
  tickets!:Array<Ticket>;
 constructor(private servicio:TicketService ,private router:Router){
  this.tickets = new Array<Ticket>();
  this.obtenerTickets();
 }

obtenerTickets(){
  this.servicio.getTickets().subscribe(
    result=>{
      result.forEach((element:any) => {
        let unTicket = new Ticket();
        Object.assign(unTicket,element);
        this.tickets.push(unTicket);
        unTicket = new Ticket();
      });
    },
    error=>{

    }
  )
}

modificarTicket(id:string){
  this.router.navigate(["ticket-form",id])
}

agregarTicket(){
  this.router.navigate(["ticket-form",0])
}

eliminarTicket(id:string) {
  this.servicio.deleteTicket(id).subscribe(
    result=> {
      console.log('Ticket eliminado correctamente');
    },
    error=> {
      console.error('Error al eliminar el ticket:', error);
    }
  );
}

// obtenerCategoria(){
//   this.servicio.getCategoria().subscribe(
//     result=>{
//       result.forEach((element:any) => {
//         let unProducto = new Ticket();
//         Object.assign(unProducto,element);
//         this.filtro.push(unProducto);
//         unProducto = new Ticket();
//       });
//     },
//     error=>{

//     }
//   )
}





