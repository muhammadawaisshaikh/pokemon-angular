import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonComponent } from './pokemon.component';
import { AllPokemonsComponent } from './all-pokemons/all-pokemons.component';
import { PokemonEvolvesComponent } from './pokemon-evolves/pokemon-evolves.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonComponent,
    children: [
      {
        path: '',
        component: AllPokemonsComponent
      },
      {
        path: 'all-pokemons',
        component: AllPokemonsComponent
      },
      {
        path: 'pokemon-evolves',
        component: PokemonEvolvesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
