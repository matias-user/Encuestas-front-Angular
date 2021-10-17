import { Component,  OnInit } from '@angular/core';
import { CajaService } from '../caja.service';

@Component({
  selector: 'app-ing-gasto',
  templateUrl: './ing-gasto.component.html',
  styleUrls: ['./ing-gasto.component.css']
})
export class IngGastoComponent implements OnInit {

  ingreso: number = 0;
  constructor(private cajaService: CajaService) { }

  insertarIngreso(){
    this.cajaService.total += this.ingreso;

    this.ingreso = 0;
  }
  ngOnInit(): void {
  }

}
