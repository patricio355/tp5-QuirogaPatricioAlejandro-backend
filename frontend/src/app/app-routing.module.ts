import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

const routes: Routes = [
  {path : 'producto' , component : ProductoComponent},
  {path : 'transaccion' , component : TransaccionComponent},
  {path : 'ticket' , component : TicketComponent},
  {path : 'producto-form/:id' , component : ProductoFormComponent},
  {path : 'ticket-form/:id' , component : TicketFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
