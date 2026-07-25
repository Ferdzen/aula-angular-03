import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { map } from 'rxjs/operators';

import { FavoritoService } from '../../services/favorito/favorito.service';
import { FavoritoEdicaoRoutingModule } from "../../modules/favorito-edicao/favorito-edicao-routing.module";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    FavoritoEdicaoRoutingModule,
    RouterModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  public breakpointObserver = inject(BreakpointObserver);

  public umaColuna$ = this.breakpointObserver.observe([
    Breakpoints.XSmall,
    Breakpoints.Small,
  ]).pipe(map(state => state.matches));

  public duasColunas$ = this.breakpointObserver.observe([
    Breakpoints.Medium,
  ]).pipe(map(state => state.matches));

  private favoritoService = inject(FavoritoService);

  public favoritos$ = this.favoritoService.getAll();
}
