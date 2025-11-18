import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultadoBatalha } from '../models/resultado.model';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class BatalhaService {
  private urlBase = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getBatalha(): Observable<string> {
    return this.http.get(`${this.urlBase}/iniciar`, { responseType: 'text' });
  }

  postResultado(gladiador1: string, gladiador2: string, arma1: string, arma2: string, armadura1: boolean, armadura2: boolean): Observable<ResultadoBatalha> {
    const payload = { gladiador1, gladiador2, arma1, arma2, armadura1, armadura2 };
    return this.http.post<ResultadoBatalha>(`${this.urlBase}/resultado`, payload);
  }
}
