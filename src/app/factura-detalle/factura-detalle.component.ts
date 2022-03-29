import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente, Factura, FacturaDetalle } from '../models/model';
import { FacturacionService } from '../services/facturacion.service';

@Component({
  selector: 'app-factura-detalle',
  templateUrl: './factura-detalle.component.html',
  styleUrls: ['./factura-detalle.component.css']
})
export class FacturaDetalleComponent implements OnInit {

  public myfactura: Factura | any;
  public myDetalles: FacturaDetalle[];
  public detallesForm = this.fb.group(
    {
      idProducto: [1, Validators.required],
      cantidad: [0, Validators.required],
      valorUnitario: [0, Validators.required],
      valorTotal: [0, Validators.required],
    }
  );

  public clienteSelect: any;
  public listaClientes: Cliente[] | undefined;

  constructor(
    private fb: FormBuilder,
    private ApiFacturacion: FacturacionService) {
    this.myDetalles = [];
    this.myfactura = { id: 1, idCliente: 1003, totalVenta: 1000}


    this.ApiFacturacion.getClientes().subscribe(res => { 
      this.listaClientes = res.data;
    });

  }

  addFactura() {
    this.myfactura.detalles = this.myDetalles;
    console.log(this.myfactura);
    this.ApiFacturacion.addFactura(this.myfactura).subscribe(resp => {
      console.log('Factura creada con exito');
    });
  }


  addDetalle() {
    this.myDetalles.push(this.detallesForm.value);
    console.log(this.myDetalles);
  }
  limpiar() {

  }

  ngOnInit(): void {

  }

}
