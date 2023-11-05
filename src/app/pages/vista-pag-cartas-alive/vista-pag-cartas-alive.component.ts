
import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from 'src/app/services/consumo-api.service';
import { MarcoCartaComponent } from 'src/app/components/marco-carta/marco-carta.component';
import { Carta } from 'src/app/modules/carta';
import { CartaService } from 'src/app/services/carta.service';
import { Usuario } from 'src/app/modules/usuario';
import { Route, Router } from '@angular/router';


@Component({
  templateUrl: './vista-pag-cartas-alive.component.html',
  styleUrls: ['./vista-pag-cartas-alive.component.css']
})
export class VistaPagCartasAliveComponent {

//FILTRO DE CARTAS POR STATUS
cartasAlive:Carta[]=[];


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

 
    this.cartasAlive = this.consumoApiService.conseguirDatosAlive();
 
    console.log(this.cartasAlive);

    let login = sessionStorage.key(0);//login tiene la unica key que se guarda
    if(login){
      let jsonsting = sessionStorage.getItem(login);//aca se obtiene el string Json desde el sesssion
      if(jsonsting){
        this.usuario = JSON.parse(jsonsting);
        console.log("esto es usuario "+ this.usuario );//y aca se lo pasa a obj de tipo usuario
      }
    }
  
}

  loginOcarrito(){
    if (sessionStorage.length == 0){
      this.route.navigate(['/home']);
    }
    else{
      //let card : Carta
      //tengo que poner cartas[indice en el que este] dentro de la linea de abajo. 

      /* eso o poner el id de la carta que se esta mostrando en el html y usar el cardservice
      o el apiconsumoservice para poner la carta dentro del push*/
      console.log("aca se agregara una carta al carrito");
       this.usuario.carrito.articulos.push(); 

    }
  }

}
