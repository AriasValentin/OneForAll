import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInicioComponent } from './pages/home-inicio/home-inicio.component';
import { PaginaVisualizacionCartasComponent } from './pages/pagina-visualizacion-cartas/pagina-visualizacion-cartas.component';
import { RegistroVistaComponent } from './pages/registro-vista/registro-vista.component';
import { CarritoVistaComponent } from './pages/carrito-vista/carrito-vista.component';
import { CommonModule } from '@angular/common';
import { PagNoEncontradaComponent } from './pages/pag-no-encontrada/pag-no-encontrada.component';


const routes: Routes = [
{path:"home",component: HomeInicioComponent},
{path:"vista-cartas",component: PaginaVisualizacionCartasComponent},
{path:"registro-vista",component: RegistroVistaComponent},
{path:"carrito-vista",component:CarritoVistaComponent},
{path: "pagNoEncontrada", component: PagNoEncontradaComponent},
{path: '', redirectTo:"home",pathMatch :"full"}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
