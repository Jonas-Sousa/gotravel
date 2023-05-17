import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componente/Navbar/navbar.component';
import { HeaderComponent } from './componente/Header/header.component';
import { PopularesComponent } from './componente/populares/populares.component';
import { CardsComponent } from './componente/populares/Cards/cards.component';
import { ContatoComponent } from './componente/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    PopularesComponent,
    CardsComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
