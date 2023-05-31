import { CardService } from './service/card.service';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from './service/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PopularesComponent } from './componente/populares/populares.component';
import { CardsComponent } from './componente/populares/Cards/cards.component';
import { JornadaComponent } from './componente/Jornada/jornada.component';
import { FotosCardsComponent } from './componente/Jornada/fotos-cards/fotos-cards.component';
import { LoginComponent } from './componente/Login/login.component';
import { PagPrincipalComponent } from './componente/pag-principal/pag-principal.component';
import { CadastrarComponent } from './componente/Cadastrar/cadastrar.component';
import { NavComponent } from './componente/nav/nav.component';
import { HeadComponent } from './componente/head/head.component';
import { VideoComponent } from './componente/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularesComponent,
    CardsComponent,
    JornadaComponent,
    FotosCardsComponent,
    LoginComponent,
    PagPrincipalComponent,
    CadastrarComponent,
    NavComponent,
    HeadComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,CardService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
