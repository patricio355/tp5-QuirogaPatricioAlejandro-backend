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
cat!:string;
ngOnInit(): void {
}

  filtro!:Array<Ticket>;
  tickets!:Array<Ticket>;
 constructor(private servicio:TicketService ,private router:Router){
  this.tickets = new Array<Ticket>();
  this.filtro = new Array<Ticket>();
  this.obtenerTickets();
  this.obtenerTicketsPorFiltro()
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

obtenerTicketsPorFiltro() {
  this.filtro = new Array<Ticket>();
  this.servicio.getCategoria(this.cat).subscribe(
    result1 => {
      if (Array.isArray(result1)) {
        result1.forEach((element: any) => {
          let unTicket = new Ticket();
          Object.assign(unTicket, element);
          this.filtro.push(unTicket);
          unTicket = new Ticket();
        });
      } else {
        let unTicket = new Ticket();
        Object.assign(unTicket, result1);
        this.filtro.push(unTicket);
        unTicket = new Ticket();
      }
    },
    error => {
    
    }
  );
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
      this.tickets = new Array<Ticket>();
      this.obtenerTickets();
    },
    error=> {
      console.error('Error al eliminar el ticket:', error);
    }
  );
}

}





