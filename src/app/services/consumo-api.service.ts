import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService implements OnInit{

  constructor(private http :HttpClient) { }

  ngOnInit(): void {
    
  }
  public get(url:string){
    return this.http.get(url) //GET A LA URL
  }

}
