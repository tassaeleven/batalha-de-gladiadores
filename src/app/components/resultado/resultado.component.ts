import { Component, Input, SimpleChanges } from '@angular/core';
import { ResultadoBatalha } from '../../models/resultado.model';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent {
  @Input() resultado: ResultadoBatalha | null = null;

  exibirResultado = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resultado'] && this.resultado) {
      this.exibirResultado = true;
    }
  }
}
