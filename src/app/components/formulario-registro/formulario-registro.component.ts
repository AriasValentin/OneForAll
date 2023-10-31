import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { Usuario } from 'src/app/modules/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Carrito } from 'src/app/modules/carrito';




@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})

export class FormularioRegistroComponent   {

  forms : FormGroup;

  /* UsuServ : UsuarioService; */

  constructor(private formUsuario : FormBuilder, private usuarioService : UsuarioService){
    this.forms = this.formUsuario.group({
      nombre: '',
      dni: '',
      email: '',
      contraseña:'',
      contraseña2:'',
    })
  }
  

  cargarUsuario(){
   
   const usuarioRegistro: Usuario = {
    nombre : this.forms.value.nombre,
    dni : this.forms.value.dni,
    email : this.forms.value.email,
    contraseña : this.forms.value.contraseña,
    contraseña2: this.forms.value.contraseña2,
    cartasCompradas :[],
    carrito : {articulos:[],precioTotal :0}
    }
    
      console.log(usuarioRegistro);
      this.usuarioService.agregarUsuario(usuarioRegistro);
      localStorage.setItem(usuarioRegistro.email, JSON.stringify(usuarioRegistro));
      this.forms.reset();
  }

}