import { IFavorito } from '@nx-monorepo/comum'
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE } from '../../app.config';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class FavoritoService {

    private httpClient = inject(HttpClient);
    private apiBase = inject(API_BASE)

    /**
     * Recupera a lista de favoritos do backend
     * @returns Observable Compartilhado e com replay do `array` de `IFavorito`
     */

    public getAll(): Observable<IFavorito[]> {
      return this.httpClient.get<IFavorito[]>(`${this.apiBase}/favorito`).pipe(
        shareReplay(),
      )
    }
}
