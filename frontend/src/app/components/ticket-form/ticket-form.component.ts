import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { EspectadorService } from 'src/app/services/espectador.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit{

  ticket!:Ticket;
  accion:string="";

  espectadores! : Array<Espectador>;

  constructor (private servicio:TicketService,private espService:EspectadorService, private activatedRoute: ActivatedRoute,private router:Router){
    this.ticket = new Ticket();
    this.espectadores = new Array<Espectador>();
  }

ngOnInit():void{

  this.activatedRoute.params.subscribe(async params => {
    if(params['id'] == "0"){
      this.accion ="new";
      this.cargarEspectadores();
    }else {
      this.accion = "update";
      await this.cargarEspectadores() // con el await me aseguro de que carguen los espectadores antes de cargar el ticket
      this.cargarTicket(params['id']) 
    }
  });
}

cargarTicket(id : string){
  this.servicio.getTicket(id).subscribe(
    result=>{
      console.log(result)
      Object.assign(this.ticket,result);
       this.ticket.espectador = this.espectadores.find(item => (item._id == this.ticket.espectador._id))!;
      
    },
    error=>{

    }
  )
}

guardarTicket(){
  this.servicio.newTicket(this.ticket).subscribe(
    (result:any)=>{
      if (result.status == 1)
      alert(result.msg)
      this.router.navigate(["ticket"])
    },
    error=>{
      alert(error.msg)
    }
  )
}

async cargarEspectadores(){
this.espService.getEspectadores().subscribe(
  result=>{
    result.forEach((element:any) => {
      let unEspectador = new Espectador();
      Object.assign(unEspectador,element);
      this.espectadores.push(unEspectador);
      unEspectador = new Espectador();
    });
  },
  error=>{

  }
)

}


modificarTicket(ticket:Ticket){
  this.servicio.editTicket(ticket).subscribe(
    result =>{
      alert("se modifico")
      this.router.navigate(["ticket"])
    }
  )
}

volver(){
  this.router.navigate(["ticket"])
}
}
