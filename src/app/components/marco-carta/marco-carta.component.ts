import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/modules/carrito';
import { Carta } from 'src/app/modules/carta';
import { Usuario } from 'src/app/modules/usuario';
import { CarritoService } from 'src/app/services/carrito.service';
import { CartaService } from 'src/app/services/carta.service';
import { ConsumoApiService } from 'src/app/services/consumo-api.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-marco-carta',
  templateUrl: './marco-carta.component.html',
  styleUrls: ['./marco-carta.component.css']
})
export class MarcoCartaComponent implements OnInit 
{

  constructor(private cartaService:CartaService, private consumoApiService: ConsumoApiService, private carritoService:CarritoService, private usuarioService:UsuarioService) { }

  ngOnInit(): void 
  {

  }

}
