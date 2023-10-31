import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Usuario } from 'src/app/modules/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent {
  
 
  
   constructor(private usuarioService : UsuarioService, private route : Router){
  } 

  
/* ESTE COMPONENTE ES EL PERFIL DEL USUARIO QUE APARECE TRAS LOGUEARSE, ESTO PUEDE SER MODIFICADO*/

/* LO QUE no se como lograr, es traer correctamente el nombre usuario que se coloco en el form
utilizado en el formulario-login. en caso de poder recolectar y traerme ese dato, podria perfectamente 
setearla en cualquier lado y asi trabajar con EL usuario desde cualquier parte*/

/* pd, aca estoy usando el usuario service */

  eliminarUsuario(){
    //le da a la variable usuario, el usuario guardado en la posicion 0 del arreglo
    let usuario : Usuario = this.usuarioService.setearUsuarioUnico();
    //remueve ese usuario del local storage
    localStorage.removeItem(usuario.email);
    console.log("se elimino"+ usuario.email);
    //y te lleva hasta el inicio, porque si eliminas tu perfil, lo mas logico es que no puedas hacer nada mas
    this.route.navigate(['/home']);
    
  }
}
