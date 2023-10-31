import { Component } from '@angular/core';
import { ConsumoApiService } from 'src/app/services/consumo-api.service';
import { MarcoCartaComponent } from 'src/app/components/marco-carta/marco-carta.component';

@Component({
  selector: 'app-pagina-visualizacion-cartas',
  templateUrl: './pagina-visualizacion-cartas.component.html',
  styleUrls: ['./pagina-visualizacion-cartas.component.css']
})
export class PaginaVisualizacionCartasComponent {

fondoTarjeta: String = "/src/app/images/fondoTarjetas.png"

}
