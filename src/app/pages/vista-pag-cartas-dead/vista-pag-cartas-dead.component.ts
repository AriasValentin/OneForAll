
import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from 'src/app/services/consumo-api.service';
import { MarcoCartaComponent } from 'src/app/components/marco-carta/marco-carta.component';
import { Carta } from 'src/app/modules/carta';
import { CartaService } from 'src/app/services/carta.service';
import { Usuario } from 'src/app/modules/usuario';
import { Route, Router } from '@angular/router';
@Component({
  templateUrl: './vista-pag-cartas-dead.component.html',
  styleUrls: ['./vista-pag-cartas-dead.component.css']
})
export class VistaPagCartasDeadComponent {


//FILTRO DE CARTAS POR STATUS
cartasDead:Carta[]=[];


usuario: Usuario = {
  nombre : '',
  dni : 0,
  email : '',
  contraseña : '',
  contraseña2: '',
  cartasCompradas :[],
  carrito : {articulos:[],precioTotal :0}
} 
constructor(private consumoApiService: ConsumoApiService, private consumoCartaService: CartaService,private route : Router) {}

ngOnInit(): void {

 
    this.cartasDead = this.consumoApiService.conseguirDatosDead();
 
    console.log(this.cartasDead);

    let login = sessionStorage.key(0);//login tiene la unica key que se guarda
    if(login){
      let jsonsting = sessionStorage.getItem(login);//aca se obtiene el string Json desde el sesssion
      if(jsonsting){
        this.usuario = JSON.parse(jsonsting);
        console.log("esto es usuario "+ this.usuario );//y aca se lo pasa a obj de tipo usuario
      }
    }
  
}

loginOcarrito(card : Carta){
  if (sessionStorage.length == 0){
    this.route.navigate(['/home']);
  }
  else{

    console.log("aca se agregara una carta al carrito" + this.usuario.carrito.articulos);
    alert("Carta agregada a tu carrito !");
    this.usuario.carrito.articulos.push(card);

    localStorage.removeItem(this.usuario.email);
    localStorage.setItem(this.usuario.email,JSON.stringify(this.usuario));
    sessionStorage.removeItem(this.usuario.email);
    sessionStorage.setItem(this.usuario.email,JSON.stringify(this.usuario));

  }
}

  

}
