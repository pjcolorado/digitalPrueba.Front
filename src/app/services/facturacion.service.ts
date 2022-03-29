import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente, Producto, Factura, respuesta } from '../models/model';

@Injectable()
export class FacturacionService {

    myApiUrl: string = "http://localhost:9761/";
    myApiClientesUrl = 'Clientes';
    myApiProductosUrl = 'Productos';
    myApiFacturaUrl = 'Facturas';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
        })
    };

    constructor(private http: HttpClient) {}

    public getClientes(): Observable<respuesta> {
        //return this.http.get(this.myAppUrl + this.myApiClientesUrl); 
        return this.http.get<respuesta>(this.myApiUrl + this.myApiClientesUrl);
    }

    public getProductos(): Observable<respuesta> {
        //return this.http.get(this.myAppUrl + this.myApiProductosUrl); 
        return this.http.get<respuesta>(this.myApiUrl + this.myApiProductosUrl);
    }

    public addFactura(factura: Factura): Observable<respuesta>{
        return this.http.post<respuesta>(this.myApiUrl + this.myApiFacturaUrl, factura, this.httpOptions);
    }
}