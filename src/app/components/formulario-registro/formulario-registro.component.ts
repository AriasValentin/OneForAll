import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modules/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})

export class FormularioRegistroComponent implements OnInit {

  constructor(private servicioUsuario: UsuarioService){}
  
  ngOnInit(): void {
    
  }

}