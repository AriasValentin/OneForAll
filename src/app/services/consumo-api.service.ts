import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Carta } from '../modules/carta';
import { Observable } from 'rxjs';
import { CartaService } from './carta.service';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  private url = "https://rickandmortyapi.com/api/character";

  
    

  constructor(private http :HttpClient , private cartaService : CartaService) { }


  getCharacter(characterId: number) {
    const url = `${this.url}/${characterId}`;
    return this.http.get<any>(url);
  }

  populateCard(card: Carta, characterId: number) {
    this.getCharacter(characterId).subscribe(data => {
      // Populate the card object with the data from the API
      card.name = data.name;
      card.species = data.species;
      card.status = data.status;
      // ... populate other properties as needed
    });
  }

}
