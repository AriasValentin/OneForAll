import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInicioComponent } from './pages/home-inicio/home-inicio.component';
import { PaginaVisualizacionCartasComponent } from './pages/pagina-visualizacion-cartas/pagina-visualizacion-cartas.component';
import { RegistroVistaComponent } from './pages/registro-vista/registro-vista.component';
import { CarritoVistaComponent } from './pages/carrito-vista/carrito-vista.component';
import { CommonModule } from '@angular/common';
import { PagNoEncontradaComponent } from './pages/pag-no-encontrada/pag-no-encontrada.component';
import { UsuarioService } from './services/usuario.service';


const routes : Routes = [
  {
    path: '', component: HomeInicioComponent
  },
  {
    path: 'vistaRegisto', component: RegistroVistaComponent
  },
  {
    path: 'vistaCartas', component: PaginaVisualizacionCartasComponent
  },
  {
    path: 'home', component: HomeInicioComponent
  },
  {
    path: 'vistaCarrito', component: CarritoVistaComponent
  },


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
