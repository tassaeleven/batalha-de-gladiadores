import { Component } from '@angular/core';
import { ResultadoBatalha } from './models/resultado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  resultado!: ResultadoBatalha;

  mostrarResultado(res: ResultadoBatalha) {
    this.resultado = res;
  }
}
