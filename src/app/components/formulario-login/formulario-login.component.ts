import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/modules/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';
import { ConsumoApiService } from 'src/app/services/consumo-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent  {

  forms: FormGroup;

  constructor( private formBuilder : FormBuilder , private usuarioService : UsuarioService , private apiService: ConsumoApiService , private router:Router) {

    this.forms = this.formBuilder.group({
      nombreUsuario:["",Validators.required],
      password:["",Validators.required],
    }) 
    }
    ingresoUsuario(){

      if(localStorage.getItem(this.forms.value.nombreUsuario)){
        alert("Bienvenido a OneForMortys");
        this.router.navigate(['/vistaCartas'])

        //PRUEBA PARA VER SI ANDA EL API.
        this.apiService.conseguirDatos();
      }
      else
      {
        alert("Usuario Incorrecto")
      }

    }
  }
