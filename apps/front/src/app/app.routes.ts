import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';

export const appRoutes: Route[] = [
  {
    path: '', redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    title: 'Seus Favoritos',
    path: 'home', component: HomeComponent },
  {
    title: 'Sobre esta aplicação',
    path: 'sobre', component: SobreComponent
  },
  {
    title: 'Página não encontrada',
    path: 'nao-encontrada', component: SobreComponent
    // fazer um componente de página não encontrada
  },
  {
    path: '**', redirectTo: '/nao-encontrada'
  }


];
