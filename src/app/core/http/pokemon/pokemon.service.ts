import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPokemons(limit) {
    return this.http.get(`${environment.API_BASE_URL}/v2/pokemon?limit=${limit}`);
  }

  getPokemonDetails(url) {
    return this.http.get(url);
  }

}
