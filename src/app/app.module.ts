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
    PagNoEncontradaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
