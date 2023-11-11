import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { HomeInicioComponent } from './pages/home-inicio/home-inicio.component';
import { PaginaVisualizacionCartasComponent } from './pages/pagina-visualizacion-cartas/pagina-visualizacion-cartas.component';
import { RegistroVistaComponent } from './pages/registro-vista/registro-vista.component';
import { CarritoVistaComponent } from './pages/carrito-vista/carrito-vista.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import { RouterModule , Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './services/usuario.service';
import { Carrito } from './modules/carrito';
import { Usuario } from './modules/usuario';
import { Carta } from './modules/carta';
import { ConsumoApiService } from './services/consumo-api.service';
import { PagNoEncontradaComponent } from './pages/pag-no-encontrada/pag-no-encontrada.component';
import { FormsModule } from '@angular/forms';
import { CarritoService } from './services/carrito.service';
import { CartaService } from './services/carta.service';
import { NavRegistroExitosoComponent } from './components/nav-registro-exitoso/nav-registro-exitoso.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { ModificarUsuarioComponent } from './components/modificar-usuario/modificar-usuario.component';
import { FiltradoCartasComponent } from './components/filtrado-cartas/filtrado-cartas.component';
import { MarcoCartaComponent } from './components/marco-carta/marco-carta.component';
import { VistaPagCartasAliveComponent } from './pages/vista-pag-cartas-alive/vista-pag-cartas-alive.component';
import { VistaPagCartasDeadComponent } from './pages/vista-pag-cartas-dead/vista-pag-cartas-dead.component';
import { VistaPagCartasUnknownComponent } from './pages/vista-pag-cartas-unknown/vista-pag-cartas-unknown.component';
import { VistaPagCartasFemaleComponent } from './pages/vista-pag-cartas-female/vista-pag-cartas-female.component';
import { VistaPagCartasMaleComponent } from './pages/vista-pag-cartas-male/vista-pag-cartas-male.component';
import { VistaPagCartasGenderlssComponent } from './pages/vista-pag-cartas-genderlss/vista-pag-cartas-genderlss.component';
import { VistaPagCartasUnkGENComponent } from './pages/vista-pag-cartas-unk-gen/vista-pag-cartas-unk-gen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CarritoUsuarioComponent } from './components/carrito-usuario/carrito-usuario.component';
import { CartasUsuarioComponent } from './components/cartas-usuario/cartas-usuario.component';
import { NavArticulosComponent } from './components/nav-articulos/nav-articulos.component';  
/* import { MarcoCartaComponent } from './marco-carta/marco-carta.component'; */


@NgModule({
  declarations: [
    AppComponent,
    FormularioLoginComponent,
    FooterComponent,
    NavegadorComponent,
    HomeInicioComponent,
    PaginaVisualizacionCartasComponent,
    RegistroVistaComponent,
    CarritoVistaComponent,
    FormularioRegistroComponent,
    NavRegistroExitosoComponent,
    PerfilUsuarioComponent,
    ModificarUsuarioComponent,
    FiltradoCartasComponent,
    MarcoCartaComponent,
    VistaPagCartasAliveComponent,
    VistaPagCartasDeadComponent,
    VistaPagCartasUnknownComponent,
    VistaPagCartasFemaleComponent,
    VistaPagCartasMaleComponent,
    VistaPagCartasGenderlssComponent,
    VistaPagCartasUnkGENComponent,
    CarritoUsuarioComponent,
    CartasUsuarioComponent,
    NavArticulosComponent,
    

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    MatGridListModule,
    MatCardModule 
  ],

  providers: [
    UsuarioService,
    CarritoService,
    CartaService,
    ConsumoApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
