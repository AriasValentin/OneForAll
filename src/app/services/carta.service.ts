import { Injectable } from '@angular/core';
import { Carta } from '../modules/carta';
import { Usuario } from '../modules/usuario';
import { Carrito } from '../modules/carrito';

@Injectable({
  providedIn: 'root'
})
export class CartaService {
  


  listaCartas: Carta[] = [];

  constructor() { }


  agregarCarta(carta:Carta){

    this.listaCartas.push(carta);
  }

}
