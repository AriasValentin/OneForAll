import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carta } from 'src/app/modules/carta';
import { Usuario } from 'src/app/modules/usuario';

@Component({
  selector: 'app-carrito-vista',
  templateUrl: './carrito-vista.component.html',
  styleUrls: ['./carrito-vista.component.css']
})
export class CarritoVistaComponent implements OnInit{
  total:number=0;
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
    else{
      this.route.navigate(['/home']);
    }
    this.cartas = this.usuario.carrito.articulos
    this.total=this.CalcularTotal();
    

  }

  constructor(private route : Router){

  }


  CalcularTotal(){
    let total = 0;
    for (let i = 0; i < this.cartas.length; i++) {
      total = total + Number(this.cartas[i].precio);
    }
    return total;
  }
  comprarTodo(){
    for (let i = 0; i < this.cartas.length; i++) {
      this.usuario.cartasCompradas.push(this.cartas[i]);
    }
    this.usuario.carrito.articulos = [];

    localStorage.removeItem(this.usuario.email);
    localStorage.setItem(this.usuario.email,JSON.stringify(this.usuario));
    sessionStorage.removeItem(this.usuario.email);
    sessionStorage.setItem(this.usuario.email,JSON.stringify(this.usuario));


    console.log("las cartas fueron compradas" + this.usuario.cartasCompradas);

    this.route.navigate(['/vistaPerfil']);
  }

}
