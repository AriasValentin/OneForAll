import { Injectable , Inject } from '@angular/core';
import { Carta } from '../modules/carta';
import { Usuario } from '../modules/usuario';
import { Carrito } from '../modules/carrito';
import { FormularioRegistroComponent } from '../components/formulario-registro/formulario-registro.component';
import { HttpClient } from '@angular/common/http';
import { CarritoService } from './carrito.service';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: Usuario[]= [];


  constructor() { }


  pedirDatos(){

    let nombre:string;
    let dni:number;
    let email:string;
    let pass: string;
    let pass2:string;

   /* nombre = document.getElementById("nombre");
    this.registrarUsuario(nombre,dni,email,pass,pass2);*/

  }
  
  registrarUsuario(nombre: string, dni: number, email: string, contraseña: string, contra2:string) {
    const nuevoUsuario: Usuario = {
      nombre: nombre,
      dni: dni,
      email: email,
      contraseña: contraseña,
      contraseña2: contra2,
      cartasCompradas: [],
      carrito: {articulos:[],precioTotal:0}
    };
  }

  agregarUsuario(usuario:Usuario){
    this.usuarios.push(usuario);
  };
}