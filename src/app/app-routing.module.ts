import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pokemon/pokemon.module').then(m => m.PokemonModule)
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./modules/pokemon/pokemon.module').then(m => m.PokemonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
