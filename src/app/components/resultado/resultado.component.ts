import { Component, Input } from '@angular/core';
import { ResultadoBatalha } from '../../models/resultado.model';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent {
  @Input() resultado: ResultadoBatalha | null = null;
}
