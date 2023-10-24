import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Carta } from '../modules/carta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  private url = "https://rickandmortyapi.com/api/character/2";
    

  constructor(private http :HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }


}
