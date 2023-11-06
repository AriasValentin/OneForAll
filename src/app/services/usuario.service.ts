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
  emailusuario : String = '';


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

  setearUsuario  (email : String) : Usuario{
    
    for(let i = 0; i<this.usuarios.length; i++){
      if(this.usuarios[i].email == email){
        return this.usuarios[i];
      }
      if(i==this.usuarios.length){
        /* es una mala practica pero necesitaba que retornara un usuario si o si 
      a si que si no encuentra el usuario retornara el usuario en la ultima posicion */
        return this.usuarios[i];
      }
      
    }
    /* es una mala practica pero necesitaba que retornara un usuario si o si 
    a si que si no encuentra el usuario podiblemente retorne el primero o el ultimo usuario */
    return this.usuarios[0];
  }
  setearUsuarioUnico (){

        console.log(this.usuarios);
        return this.usuarios[0];
  }

  setearEmailUsuario(email : String){
    this.emailusuario = email;
  }

  reconocerUsuarioLogueado(){
    return this.emailusuario;
  }

  agregarAlCarrito(carta:Carta){
    document.addEventListener("click",evento=>{
      evento.preventDefault();

      //ACA TRAES AL USUARIO !

      // USUARIO.CARRITO.PUSH(carta);

      //ACA CALCULO QUE VOLVES A CAGAR EL ARCHIVO DE USUARIO EN EL LOCAL CON LOS DATOS PISADOS
    })
  }

  
}