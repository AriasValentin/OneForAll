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

  mostrarCarta(carta:Carta):String{

    return "Estos son los datos de la carta:" +carta.id+ " " +carta.name+ " " +carta.status+ " " +carta.species
    + " " +carta.gender+ " " +carta.image+ " " +carta.precio;
  }

  precioRandom():Number{

    let  randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return randomNumber;
  }

  getCartas():Carta[]{
return this.listaCartas;
  }



}
