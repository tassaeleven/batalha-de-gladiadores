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
      gladiador1: ['Maximus', [Validators.required]],
      gladiador2: ['Spartacus', [Validators.required]],
    });
  }

  iniciarBatalha() {
    if (this.form.invalid) return;
    this.loading = true;
    this.error = null;

    const { gladiador1, gladiador2, vencedor} = this.form.value;

    // Chama endpoint de iniciar (opcional)
    this.batalhaService.getBatalha().subscribe({
      next: () => {
        // Em seguida, pede o resultado
        this.batalhaService.postResultado(gladiador1, gladiador2, vencedor).subscribe({
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
