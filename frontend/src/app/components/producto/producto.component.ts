import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  producto!:Producto;
  productos!: Array<Producto>;
  constructor(private servicio: ProductoService,private router : Router){
  this.productos = new Array<Producto>();
  this.obtenerProductos();  
  this.producto = new Producto();
  }

  obtenerProductos(){
    this.servicio.getProductos().subscribe(
      result=>{
        result.forEach((element:any) => {
          let unProducto = new Producto();
          Object.assign(unProducto,element);
          this.productos.push(unProducto);
          unProducto = new Producto();
        });
      },
      error=>{

      }
    )
  }

  agregarProducto(){
    this.router.navigate(["producto-form",0])
  }

  
}
