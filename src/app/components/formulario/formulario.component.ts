import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BatalhaService } from '../../services/batalha.service';
import {
  ResultadoBatalhaResponse,
  RodadaDTO,
} from '../../models/batalha.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  g1 = { nome: '', arma: '', armadura: false };
  g2 = { nome: '', arma: '', armadura: false };

  resultado: ResultadoBatalhaResponse | null = null;
  mostrarFormulario = true;
  mostrarImagemBatalha = false;
  mostrarImagemVencedor = false;
  loading = false;
  error: string | null = null;

  constructor(private batalhaService: BatalhaService) {}

  iniciar() {
    if (!this.g1.nome || !this.g2.nome) {
      this.error = 'Preencha todos os nomes';
      return;
    }
    if (!this.g1.arma || !this.g2.arma) {
      this.error = 'Selecione todas as armas';
      return;
    }
    this.loading = true;
    this.mostrarImagemBatalha = true;
    this.error = null;

    const payload = {
      gladiador1: {
        nome: this.g1.nome,
        arma: this.g1.arma,
        armadura: this.g1.armadura,
      },
      gladiador2: {
        nome: this.g2.nome,
        arma: this.g2.arma,
        armadura: this.g2.armadura,
      },
    };

    setTimeout(() => {
      this.batalhaService.batalhar(payload).subscribe({
        next: (res) => {
          this.resultado = res;
          this.mostrarImagemBatalha = false;
          this.loading = false;
          this.mostrarImagemVencedor = true;
        },
        error: (err) => {
          this.error = 'Erro ao executar batalha';
          this.loading = false;
        },
      });
    }, 2000);
    this.mostrarFormulario = false;
  }
}
