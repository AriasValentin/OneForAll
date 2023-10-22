import { Carta } from "./carta";

export interface Usuario {
    nombre: String;
    apellido: String;
    dni: Number;
    email: String;
    direccion: String;
    celular: Number;
    contraseña: String;
    cartasCompradas:Carta[];
}

