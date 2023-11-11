import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carta } from 'src/app/modules/carta';
import { Usuario } from 'src/app/modules/usuario';

@Component({
  selector: 'app-carrito-usuario',
  templateUrl: './carrito-usuario.component.html',
  styleUrls: ['./carrito-usuario.component.css']
})
export class CarritoUsuarioComponent implements OnInit{
  
  
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
    this.cartas = this.usuario.carrito.articulos

  }

  constructor (private route : Router){

  }

  borrarDeseado(card : Carta){
    /* lo que sucede a continuacion es que se filtra el arreglo de articulos, eliminando el elemento
    que es igual a la carta, tras ese filtrado se lo asigna a el listado de articulos en el carrito */
    this.usuario.carrito.articulos = this.usuario.carrito.articulos.filter(elemento => elemento !== card);

    localStorage.removeItem(this.usuario.email);
    localStorage.setItem(this.usuario.email,JSON.stringify(this.usuario));
    sessionStorage.removeItem(this.usuario.email);
    sessionStorage.setItem(this.usuario.email, JSON.stringify(this.usuario));


    this.refrescarPagina();

   /*  localStorage.getItem(this.usuario.email); */

    /* hago que se elimine pero no en tiempo real. */


  }
  comprarDeseado(card : Carta){

    this.usuario.carrito.articulos = this.usuario.carrito.articulos.filter(elemento => elemento !== card);
    this.usuario.cartasCompradas.push(card);

    localStorage.removeItem(this.usuario.email);
    localStorage.setItem(this.usuario.email,JSON.stringify(this.usuario));
    sessionStorage.removeItem(this.usuario.email);
    sessionStorage.setItem(this.usuario.email, JSON.stringify(this.usuario));

    this.refrescarPagina();
  }

  refrescarPagina() {
    const currentUrl = this.route.url;
    this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.route.navigateByUrl(currentUrl);
    });
  }


}
