import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FormcontactoComponent } from './formcontacto/formcontacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { FilacuatroComponent } from './filacuatro/filacuatro.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarruselComponent,
    FormcontactoComponent,
    InicioComponent,
    FilacuatroComponent,
    QuienessomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
