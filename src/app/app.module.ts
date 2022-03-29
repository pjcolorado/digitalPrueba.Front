import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaComponent } from './factura/factura.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from './cliente/cliente.component';
import { ProductoComponent } from './producto/producto.component';
import { FacturacionService } from './services/facturacion.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacturaDetalleComponent } from './factura-detalle/factura-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent,
    ClienteComponent,
    ProductoComponent,
    FacturaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ FacturacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
