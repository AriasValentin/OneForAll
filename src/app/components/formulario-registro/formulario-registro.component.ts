import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, ValidatorFn, Validators } from '@angular/forms';
import { Usuario } from 'src/app/modules/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Carrito } from 'src/app/modules/carrito';
import { Route, Router } from '@angular/router';




@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})

export class FormularioRegistroComponent   {



  

  forms : FormGroup;

  /* UsuServ : UsuarioService; */

  constructor(private formUsuario : FormBuilder, private usuarioService : UsuarioService, private route : Router){
    this.forms = this.formUsuario.group({
      nombre: ['',[Validators.required,Validators.maxLength(20)]],
      dni: ['',[Validators.required,Validators.minLength(7),Validators.maxLength(9)]],
      email: ['',[Validators.required,Validators.email,Validators.minLength(5)]],
      contraseña:['',[Validators.required]],
      contraseña2:['',[Validators.required,]],
    })
    this.forms.get('contraseña2')?.setValidators([Validators.required, this.passwordValidator()]);
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
       let usuarioExistente  = localStorage.getItem(usuarioRegistro.email);
      if(usuarioExistente == null){
        console.log(usuarioRegistro);
        this.usuarioService.agregarUsuario(usuarioRegistro);
        localStorage.setItem(usuarioRegistro.email, JSON.stringify(usuarioRegistro));
        this.forms.reset();
        
      }
      else{
        alert('el usuario ya se encuentra');
      }
      
      this.route.navigate(['/home']);
  }

  public passwordValidator(): ValidatorFn {
    return () => {

      const password = this.forms.get('contraseña')?.value;
      const repeat_password = this.forms.get('contraseña2')?.value;

      if(!password || !repeat_password) return { isValid: false };

      if(password!==repeat_password) return {isValid:false};      
      
      return null;
    };
  }
  

}