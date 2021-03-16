import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { AllPokemonsComponent } from './all-pokemons/all-pokemons.component';
import { PokemonEvolvesComponent } from './pokemon-evolves/pokemon-evolves.component';


@NgModule({
  declarations: [PokemonComponent, AllPokemonsComponent, PokemonEvolvesComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
