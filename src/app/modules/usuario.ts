import { OnInit } from "@angular/core";
import { Carrito } from "./carrito";
import { Carta } from "./carta";
import { Injectable } from "@angular/core";

export interface Usuario {

    nombre: string;
    dni: Number ;
    email: string;
    contraseña: string;
    contraseña2:string;
    cartasCompradas:Carta[];
    carrito:Carrito;
    
}


