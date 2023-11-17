import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../modules/usuario';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit{

    forms: FormGroup;
    usu: Usuario = {
    nombre : '',
    dni : 0,
    email : '',
    contraseña : '',
    contraseña2: '',
    cartasCompradas :[],
    carrito : {articulos:[],precioTotal :0}
  } 

  ngOnInit(): void {
/*     let logueado = this.usuarioService.reconocerUsuarioLogueado();
    console.log("esto es logueado"+ logueado);
    this.usu = this.usuarioService.setearUsuario(logueado); */

    let login = sessionStorage.key(0);//login tiene la unica key que se guarda
    if(login){
      let jsonsting = sessionStorage.getItem(login);//aca se obtiene el string Json desde el sesssion
      if(jsonsting){
        this.usu = JSON.parse(jsonsting);
        console.log("esto es usuario "+ this.usu );//y aca se lo pasa a obj de tipo usuario
      }
    }

  }
  constructor(private usuarioService : UsuarioService, private route : Router, private formUsuario : FormBuilder){
    this.forms = this.formUsuario.group({
      nombre: ['',[Validators.required,Validators.maxLength(20)]],
      dni: ['',[Validators.required,Validators.minLength(7),Validators.maxLength(9)]],
      contraseña:['',[Validators.required]],
      contraseña2:['',[Validators.required,]],
    })
    this.forms.get('contraseña2')?.setValidators([Validators.required, this.passwordValidator()]);
  } 

  setearDatos(){
    console.log(this.usu);
     this.usu.nombre = this.forms.value.nombre;
     this.usu.dni = this.forms.value.dni;
     this.usu.contraseña = this.forms.value.contraseña;
     this.usu.contraseña2 = this.forms.value.contraseña2;

     localStorage.removeItem(this.usu.email);
     localStorage.setItem(this.usu.email, JSON.stringify(this.usu));
     sessionStorage.removeItem(this.usu.email);
     sessionStorage.setItem(this.usu.email, JSON.stringify(this.usu));
     
     this.forms.reset();
     this.route.navigate(['/vistaPerfil']);
  
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
