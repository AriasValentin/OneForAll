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

  sacarDatosCarta(carta: Carta, personajeID: number) {
    this.getCharacter(personajeID).subscribe(data => {
      // Populate the card object with the data from the API
      carta.name = data.name;
      carta.species = data.species;
      carta.status = data.status;
      // ... populate other properties as needed
      
      this.cartaService.agregarCarta(carta);
    });
  }


  recorrerCartas(){

    for(let i = 0; i < 100 ; i++){

      this.sacarDatosCarta(,i)

    }
  }

  };
