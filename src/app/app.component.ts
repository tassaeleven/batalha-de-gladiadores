import { Component } from '@angular/core';
import { ResultadoBatalha } from './models/resultado.model';
import { ResultadoBatalhaResponse } from './models/batalha.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  resultado!: ResultadoBatalhaResponse;

  mostrarResultado(res: ResultadoBatalhaResponse) {
    this.resultado = res;
  }
}
