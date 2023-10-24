import { Injectable } from '@angular/core';
import { Carta } from '../modules/carta';
import { Usuario } from '../modules/usuario';
import { Carrito } from '../modules/carrito';
import { FormularioRegistroComponent } from '../components/formulario-registro/formulario-registro.component';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  crearUsuario():void{

    let boton = document.getElementById("boton");
    boton?.addEventListener("submit",()=>{

      let apellido = document.getElementById("apellido");
      let usuario: Usuario;

    })

  }

}
