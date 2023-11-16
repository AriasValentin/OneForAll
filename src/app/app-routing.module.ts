import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInicioComponent } from './pages/home-inicio/home-inicio.component';
import { PaginaVisualizacionCartasComponent } from './pages/pagina-visualizacion-cartas/pagina-visualizacion-cartas.component';
import { RegistroVistaComponent } from './pages/registro-vista/registro-vista.component';
import { CarritoVistaComponent } from './pages/carrito-vista/carrito-vista.component';
import { CommonModule } from '@angular/common';
import { PagNoEncontradaComponent } from './pages/pag-no-encontrada/pag-no-encontrada.component';
import { UsuarioService } from './services/usuario.service';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { ModificarUsuarioComponent } from './components/modificar-usuario/modificar-usuario.component';
import { VistaPagCartasAliveComponent } from './pages/vista-pag-cartas-alive/vista-pag-cartas-alive.component';
import { VistaPagCartasDeadComponent } from './pages/vista-pag-cartas-dead/vista-pag-cartas-dead.component';
import { VistaPagCartasUnknownComponent } from './pages/vista-pag-cartas-unknown/vista-pag-cartas-unknown.component';
import { VistaPagCartasFemaleComponent } from './pages/vista-pag-cartas-female/vista-pag-cartas-female.component';
import { VistaPagCartasMaleComponent } from './pages/vista-pag-cartas-male/vista-pag-cartas-male.component';
import { VistaPagCartasGenderlssComponent } from './pages/vista-pag-cartas-genderlss/vista-pag-cartas-genderlss.component';
import { VistaPagCartasUnkGENComponent } from './pages/vista-pag-cartas-unk-gen/vista-pag-cartas-unk-gen.component';
import { authGuard } from './guards/auth.guard';


const routes : Routes = [
  {
    path: '', component: HomeInicioComponent
  },
  {
    path: 'vistaRegisto', component: RegistroVistaComponent
  },
  {
    path: 'vistaCartas', component: PaginaVisualizacionCartasComponent, canActivate:[authGuard],
  },
  {
    path: 'home', component: HomeInicioComponent
  },
  {
    path: 'vistaCarrito', component: CarritoVistaComponent, canActivate:[authGuard],
  },
  {
    path: 'vistaPerfil', component: PerfilUsuarioComponent, canActivate:[authGuard],
  },
  {
    path: 'modificarUsuario', component: ModificarUsuarioComponent, canActivate:[authGuard],
  },
  {
    path: 'vistaAlive', component: VistaPagCartasAliveComponent, canActivate:[authGuard],
  },
  {
    path: 'vistaDead', component: VistaPagCartasDeadComponent, canActivate:[authGuard],
  },
  {
    path: 'vistaUnk', component: VistaPagCartasUnknownComponent, canActivate:[authGuard],
  },

  {
    path: 'vistaFemale', component: VistaPagCartasFemaleComponent, canActivate:[authGuard],
  },
  {
    path: 'vistaGer', component: VistaPagCartasGenderlssComponent, canActivate:[authGuard],
  },
  {
    path: 'vistaUnkGEN', component: VistaPagCartasUnkGENComponent, canActivate:[authGuard],
  },
  {
    path: 'vistaMale', component: VistaPagCartasUnkGENComponent, canActivate:[authGuard],
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
