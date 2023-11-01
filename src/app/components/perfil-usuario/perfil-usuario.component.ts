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
  let logueado = this.usuarioService.reconocerUsuarioLogueado();
  //le da a la variable usuario, el usuario guardado en la posicion 0 del arreglo
  console.log("esto es logueado"+ logueado);
  this.usuario = this.usuarioService.setearUsuario(logueado);

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
