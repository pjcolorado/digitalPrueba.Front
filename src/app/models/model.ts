export interface respuesta{
    exito: number;
    mensaje: string;
    data: any;
}

export class Cliente {
    id: number = 0;
    tipoDocumento: string = '';
    numeroDocumento: string = '';
    nombre: string = '';
    fechaNacimiento?: Date;
    direccion: string = '';
    telefono: string = '';
}
export class Producto {
    id: number = 0;
    codigo: string = '';
    nombre: string = '';
    estado: boolean = false;
    precioVenta: number = 0;
    existenciaActual: number = 0;
}
export interface Factura {
    id: number;
    idCliente: number;
    totalVenta: number;
    detalles: FacturaDetalle[];
}

export interface FacturaDetalle {
    id: number;
    idFactura: number;
    idProducto: number;
    cantidad: number;
    valorUnitario: number;
    valorTotal: number;
}




