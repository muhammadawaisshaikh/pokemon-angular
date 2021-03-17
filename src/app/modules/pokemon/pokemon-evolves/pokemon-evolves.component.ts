import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { PokemonService } from '../../../core/http/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-evolves',
  templateUrl: './pokemon-evolves.component.html',
  styleUrls: ['./pokemon-evolves.component.scss']
})
export class PokemonEvolvesComponent implements OnInit {

  pokemons: any = [];
  data: any = '';

  constructor(
    private pokemon: PokemonService,
    private router : Router,
    private _location: Location
  ) {
    this.data = this.router.getCurrentNavigation().extras.state.data;
  }

  ngOnInit(): void {
    this.getEvolution();
    console.log(this.data);
  }

  getEvolution() {
    this.pokemon.getPokemonEvolution(this.data.id).subscribe(res => {
      if (res) {
        res['chain'].evolves_to.forEach(element => {
          this.pokemon.getPokemonDetails(element.species.url).subscribe(res => {
            this.pokemons.push({
              ...element,
              ...res,
              img: `https://pokeres.bastionbot.org/images/pokemon/${res['id']}.png`
            });
          });
        });
      }
    })
  }

  backClicked() {
    this._location.back();
  }

}
