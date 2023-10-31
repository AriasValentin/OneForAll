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
  mostrarUsuariosArreglo(){
    console.log(this.usuarios);
  }

  setearUsuario (email : String){
    for(let i = 0; i<this.usuarios.length; i++){
      if(this.usuarios[i].email == email){
        return this.usuarios[i];
      }
      if(i==this.usuarios.length){
        return console.log('no esiste');
      }
    }
  }
  setearUsuarioUnico (){

        console.log(this.usuarios);
        return this.usuarios[0];
  }

  
}