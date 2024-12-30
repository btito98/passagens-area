import { Observable, shareReplay } from 'rxjs';
import { Injectable } from '@angular/core';
import { UnidadeFederativa } from '../types/types';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UnidadeFederativaService {
  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<UnidadeFederativa[]>;
  
   // Cache de 24 horas em milissegundos
   private CACHE_TIMEOUT = 24 * 60 * 60 * 1000; // 1 dia

  constructor(private http: HttpClient) {}

  listar(): Observable<UnidadeFederativa[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(
        shareReplay({
          bufferSize: 1,
          refCount: true,
          windowTime: this.CACHE_TIMEOUT
        })
      );
    }
    return this.cache$;
  }

  private requestEstados(): Observable<UnidadeFederativa[]> {
    return this.http.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`);
  }
}