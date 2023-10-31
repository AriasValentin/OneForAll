import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/modules/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent  {

  forms: FormGroup;

  constructor( private formBuilder : FormBuilder , private usuarioService : UsuarioService) {

    this.forms = this.formBuilder.group({
      nombreUsuario:["",Validators.required],
      password:["",Validators.required],
    }) 
    }
    ingresoUsuario(){

      if(localStorage.getItem(this.forms.value.nombreUsuario)){
        alert("Bienvenido a OneForMortys");
      }
      else
      {
        alert("Usuario Incorrecto")
      }

    }
  }
