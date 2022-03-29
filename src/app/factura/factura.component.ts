import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Factura, FacturaDetalle } from '../models/model';
import { FacturacionService } from '../services/facturacion.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  public myfactura: Factura | any;
  public mydetalles: FacturaDetalle[] | any;
  private formBuilder: FormBuilder | any;

  public facturaForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private ApiFacturacion: FacturacionService
  ) {
    this.myfactura = { id: 1, idCliente: 1003, totalVenta: 100, fecha: '2022-03-28' }
  }

    addFactura(){
      this.myfactura.detalles = this.mydetalles;
      this.ApiFacturacion.addFactura(this.myfactura).subscribe(resp => {
          console.log('Factura creada con id: ' + resp);
      }); 
    }

    limpiar(){

    }

  ngOnInit(): void {

    this.facturaForm = this.fb.group(
      {
        id: [1, Validators.required],
        cliente: [1003, Validators.required],
        fecha: [1, Validators.required]
      }
    );
  }

}
