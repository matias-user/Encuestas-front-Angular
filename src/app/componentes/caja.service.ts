import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CajaService {

  total          : number = 0;
  deudores       : string[] = [];
  historialGastos: number[] = [];
  historialAbonos: number[] = [];
  constructor() { }

  get totalCaja(){
    return this.total;
  }
}
