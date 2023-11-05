import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Usuario } from 'src/app/modules/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  
  usuario: Usuario = {
    nombre : '',
    dni : 0,
    email : '',
    contraseña : '',
    contraseña2: '',
    cartasCompradas :[],
    carrito : {articulos:[],precioTotal :0}
  } 
 ngOnInit(): void {
    /*  let logueado = this.usuarioService.reconocerUsuarioLogueado();
      console.log("esto es logueado"+ logueado);
      this.usuario = this.usuarioService.setearUsuario(logueado); */

    /* aca  se vera la magia del sessionStorage */
    
    let login = sessionStorage.key(0);//login tiene la unica key que se guarda
    if(login){
      let jsonsting = sessionStorage.getItem(login);//aca se obtiene el string Json desde el sesssion
      if(jsonsting){
        this.usuario = JSON.parse(jsonsting);
        console.log("esto es usuario "+ this.usuario );//y aca se lo pasa a obj de tipo usuario
      }
    }
    
 }
  

 constructor(private usuarioService : UsuarioService, private route : Router){
  } 

  eliminarUsuario(){
    localStorage.removeItem(this.usuario.email);
    console.log("se elimino"+ this.usuario.email);
    //y te lleva hasta el inicio, porque si eliminas tu perfil, lo mas logico es que no puedas hacer nada mas
    this.route.navigate(['/home']);

  }

  llevarModificarUsuario(){
    this.route.navigate(['/modificarUsuario']);
  }

  

}
