import { CadastrarComponent } from './componente/Cadastrar/cadastrar.component';
import { LoginComponent } from './componente/Login/login.component';
import { PagPrincipalComponent } from './componente/pag-principal/pag-principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    component: PagPrincipalComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastrar',
    component: CadastrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
