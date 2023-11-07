import { Carta } from "./carta";

export interface Carrito{
    articulos:Array<Carta>; 
    precioTotal:number;
}