import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent {
  producto!:Producto;
  constructor(private servicio: ProductoService,private router : Router){
    this.producto = new Producto();
    }

  guardarProducto(){
    this.servicio.createProducto(this.producto).subscribe(
      (result:any)=>{
        if (result.status == 1)
        alert(result.msg)
      },
      error=>{
        alert(error.msg)
      }
    )
  }
}
