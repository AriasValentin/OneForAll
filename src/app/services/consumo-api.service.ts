import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Carta } from '../modules/carta';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  private url = "https://rickandmortyapi.com/api/character/2";

  constructor(private http :HttpClient) { }

  obtenerdatos(items:[Carta]){

    let carta =  this.http.get(this.url);
    console.log(carta);
  }

}
