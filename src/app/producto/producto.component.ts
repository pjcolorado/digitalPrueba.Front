import { Component, OnInit } from '@angular/core';
import { FacturacionService } from '../services/facturacion.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(
    private ApiFacturacion: FacturacionService) {
    this.ApiFacturacion.getProductos().subscribe(res => { 
      console.log(res); 
    }
    );
  }

  ngOnInit(): void {
  }

}
