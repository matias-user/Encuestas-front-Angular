import { Component } from '@angular/core';
import { CajaService } from '../caja.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  fecha: Date = new Date();
  constructor(private cajaService: CajaService) { }

  total: number = this.cajaService.totalCaja;

}
