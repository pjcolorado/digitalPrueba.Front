import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './factura/factura.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProductoComponent } from './producto/producto.component';
import { FacturaDetalleComponent } from './factura-detalle/factura-detalle.component';

const routes: Routes = [
  {
    path: 'factura',
    component: FacturaDetalleComponent
  },
  {
    path: 'clientes',
    component: ClienteComponent
  },
  {
    path: 'productos',
    component: ProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
