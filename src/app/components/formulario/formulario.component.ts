import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BatalhaService } from '../../services/batalha.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  form: FormGroup;
  loading = false;
  error: string | null = null;

  @Output() resultado = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private batalhaService: BatalhaService) {
    this.form = this.fb.group({
      gladiador1: ['', [Validators.required]],
      gladiador2: ['', [Validators.required]],
      arma1: ['', [Validators.required]],
      arma2: ['', [Validators.required]],
      armadura1: [false],
      armadura2: [false],
    });
  }

  iniciarBatalha() {
    if (this.form.invalid) return;
    this.loading = true;
    this.error = null;

    const { gladiador1, gladiador2, arma1, arma2, armadura1, armadura2 } = this.form.value;

    this.batalhaService.getBatalha().subscribe({
      next: () => {
        this.batalhaService.postResultado(gladiador1, gladiador2, arma1, arma2, armadura1, armadura2 ).subscribe({
        next: (res: any) => {
          this.loading = false;
          this.resultado.emit(res);
        },
        error: (err: any) => {
          this.loading = false;
          this.error = err?.message || 'Erro ao obter resultado';
          },
        });
      },
      error: (err: any) => {
        this.loading = false;
        this.error =
          'Erro ao iniciar a batalha: ' + (err?.message || 'não foi possível');
        },
      });
  }
}
