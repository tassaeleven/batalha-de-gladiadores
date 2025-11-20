import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultadoBatalha } from '../models/resultado.model';
import { environment } from '../environments/environment';
import { ResultadoBatalhaResponse } from '../models/batalha.model';

@Injectable({ providedIn: 'root' })
export class BatalhaService {
  private urlBase = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  batalhar(payload: any): Observable<ResultadoBatalhaResponse> {
    return this.http.post<ResultadoBatalhaResponse>(`${this.urlBase}/batalhar`, payload);
  }
}
