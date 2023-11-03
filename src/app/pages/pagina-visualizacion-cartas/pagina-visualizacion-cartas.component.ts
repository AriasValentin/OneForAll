import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from 'src/app/services/consumo-api.service';
import { MarcoCartaComponent } from 'src/app/components/marco-carta/marco-carta.component';
import { Carta } from 'src/app/modules/carta';
import { CartaService } from 'src/app/services/carta.service';

@Component({
  selector: 'app-pagina-visualizacion-cartas',
  templateUrl: './pagina-visualizacion-cartas.component.html',
  styleUrls: ['./pagina-visualizacion-cartas.component.css']
})
export class PaginaVisualizacionCartasComponent implements OnInit{

cartas:Carta[]=[]

constructor(private consumoApiService: ConsumoApiService, private consumoCartaService: CartaService) {}

ngOnInit(): void {

    this.cartas = this.consumoApiService.conseguirDatos();
    console.log(this.cartas);
  
}

}
