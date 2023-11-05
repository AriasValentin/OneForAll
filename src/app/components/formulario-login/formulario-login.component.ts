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
export class FormularioLoginComponent implements OnInit {

  ngOnInit(): void {
    sessionStorage.clear();
  }
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
        //Ruta hacia el perfil del usuario, antes estaba la linea que figura comentada a continuacion
        /* this.router.navigate(['/vistaCartas']) */
        this.router.navigate(['/vistaPerfil'])

        //PRUEBA PARA VER SI ANDA EL API.
        this.apiService.conseguirDatos();


        console.log(localStorage.getItem(this.forms.value.nombreUsuario));
        
        let jsonstring = localStorage.getItem(this.forms.value.nombreUsuario);
        let usuario = null;
        if(jsonstring){
          usuario = JSON.parse(jsonstring);
          console.log(usuario);
          this.usuarioService.agregarUsuario(usuario);
          this.usuarioService.setearEmailUsuario(this.forms.value.nombreUsuario);
          /* //el session storage nos permite ingresar una key y un string (json), y que funcione similar
          al local storage, con la diferencia de que si se cierra la pagina, se vacia el sessionstorage
          los services tienen actualmente un problema de persistencia, ya que si intentamos acceder a
          el usuario desde los articulos, no sera reconocido. si no me equivoco es por una cuestion 
          de enrutamiento.*/

          /* de momento encuentro mas util trabajar con el sessionStorage, pero todo puede ser modificado*/
          sessionStorage.clear();//esto limpia el sessionstorage
          sessionStorage.setItem(this.forms.value.nombreUsuario, jsonstring);//y esto lo guarda
          
        }
        
        
      }
      else
      {
        alert("Usuario Incorrecto")
      }

    }
  }
