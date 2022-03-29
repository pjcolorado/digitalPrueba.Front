import { ApplicationInitStatus, Component, OnInit } from '@angular/core';
import { FacturacionService } from '../services/facturacion.service';
import { Cliente, Producto } from '../models/model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  listaClientes: Cliente[] | undefined;

  constructor(
    private ApiFacturacion: FacturacionService) {
    this.ApiFacturacion.getClientes().subscribe(res => { 
      console.log(res); 
      this.listaClientes = res.data;
    }
    );
  }

  ngOnInit(): void {
  }

}
