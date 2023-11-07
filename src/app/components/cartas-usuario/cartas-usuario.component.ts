import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/app/modules/carta';
import { Usuario } from 'src/app/modules/usuario';

@Component({
  selector: 'app-cartas-usuario',
  templateUrl: './cartas-usuario.component.html',
  styleUrls: ['./cartas-usuario.component.css']
})
export class CartasUsuarioComponent implements OnInit {
  cartas:Carta[]=[];
  usuario: Usuario = {
    nombre : '',
    dni : 0,
    email : '',
    contraseña : '',
    contraseña2: '',
    cartasCompradas :[],
    carrito : {articulos : [] , precioTotal :0}
  } 
  
  ngOnInit(): void {
    let login = sessionStorage.key(0);//login tiene la unica key que se guarda
    if(login){
      let jsonsting = sessionStorage.getItem(login);//aca se obtiene el string Json desde el sesssion
      if(jsonsting){
        this.usuario = JSON.parse(jsonsting);
        console.log("esto es usuario "+ this.usuario );//y aca se lo pasa a obj de tipo usuario
      } 
    }
    this.cartas = this.usuario.cartasCompradas

  }
}
