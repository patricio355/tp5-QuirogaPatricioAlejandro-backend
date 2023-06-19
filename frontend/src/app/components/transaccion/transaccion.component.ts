import { Component } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent {
  primero!:string;
segundo!:string;
valor!:number;
resultado!:number;
  transaccion!:Transaccion;
  transacciones!: Array<Transaccion>;

  filtro! : Array<Transaccion>;

  origen!:string;
  destino!:string;
  n:number = 1;

constructor(private servicio: TransaccionService){
  this.transacciones = new Array<Transaccion>();
  this.filtro = new Array<Transaccion>();
  this.transaccion = new Transaccion();
}

obtenerTransacciones(){
  this.transacciones = new Array<Transaccion>();
  this.servicio.getTransacciones().subscribe(
    result=>{
      result.forEach((element:any) => {
        let unaTransaccion = new Transaccion();
        Object.assign(unaTransaccion,element);
        this.transacciones.push(unaTransaccion);
        unaTransaccion = new Transaccion();
    });
  },
    error=>{

    }
  )
}

obtenerConversion(de : string , a :string , cant :number){
  this.servicio.getConversion(de,a,cant).subscribe(

   result => {
    
     this.resultado=result.result.convertedAmount;
     this.agregarTransaccion();
     }
 )


 }

 agregarTransaccion(){
  let transaccion = new Transaccion();
  transaccion.cantidadOrigen=this.valor;
  transaccion.cantidadDestino=this.resultado;
  transaccion.monedaDestino=this.segundo;
  transaccion.monedaOrigen=this.primero;
  transaccion.tasaConversion=this.n;
  transaccion.emailCliente="Desconocido";
  
  console.log(transaccion)
  this.servicio.altaDeTransaccion(transaccion).subscribe(
    result=>{
      //alert("se guardo")
    },error=>{
      alert("error")
    }
  )
 }

porFiltro(){
  this.filtro = new Array<Transaccion>();
  this.servicio.getPorFiltro(this.origen,this.destino).subscribe(
    result=>{
      result.forEach((element:any) => {
        let unaTransaccion = new Transaccion();
        Object.assign(unaTransaccion,element);
        this.filtro.push(unaTransaccion);
        unaTransaccion = new Transaccion();
      });
    }
  )
}

 
}
