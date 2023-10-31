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


  getCharacter(characterId: number):Observable<any> {
    const url = `${this.url}/${characterId}`;
    return this.http.get<any>(url);
  }

  conseguirDatos() {

    for(let i = 0 ; i < 10 ; i++){
      this.getCharacter(i).subscribe(data => {
        let carta: Carta ={
          id: data.id,
          name: data.name,
          status: data.status,
          species: data.species,
          gender: data.gender,
          image: data.image,
          precio: this.cartaService.precioRandom()
        }
        
        this.cartaService.agregarCarta(carta);

        console.log("esta es la info de la carta: " + this.cartaService.mostrarCarta(carta));

      });
    }
  }

  };
