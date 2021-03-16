import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../core/http/pokemon/pokemon.service';

@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.scss']
})
export class AllPokemonsComponent implements OnInit {

  pokemons: any = [];

  constructor(
    private pokemon: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this.pokemon.getAllPokemons(100).subscribe(res => {
      if (res) {
        res['results'].forEach(element => {
          this.pokemon.getPokemonDetails(element.url).subscribe(res => {
            this.pokemons.push({
              ...element,
              ...res,
              img: `https://pokeres.bastionbot.org/images/pokemon/${res['id']}.png`
            });
          });
        });
      }
    })

    console.log(this.pokemons);
    
  }

}
