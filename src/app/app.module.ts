import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componente/Navbar/navbar.component';
import { HeaderComponent } from './componente/Header/header.component';
import { PopularesComponent } from './componente/populares/populares.component';
import { CardsComponent } from './componente/populares/Cards/cards.component';
import { ContatoComponent } from './componente/Contato/contato.component';
import { JornadaComponent } from './componente/Jornada/jornada.component';
import { FotosCardsComponent } from './componente/Jornada/fotos-cards/fotos-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    PopularesComponent,
    CardsComponent,
    ContatoComponent,
    JornadaComponent,
    FotosCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
