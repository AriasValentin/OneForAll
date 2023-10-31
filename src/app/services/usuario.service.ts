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

  agregarUsuario(usuario:Usuario){
    this.usuarios.push(usuario);
  };

  buscarUsuario(nombreUsuario:string){
    if(localStorage.getItem(nombreUsuario)){
      
      alert("LOGEO EXITOSO");
    }

  }

  
}