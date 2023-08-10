import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {DashboardPageComponent} from "./dashboard-page/dashboard-page.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, // Rota padrão para a página inicial
  {path: 'login', component: LoginPageComponent}, // Rota para a página inicial (outra página já existente)
  {path: 'home', component: HomePageComponent}, // Rota para a nova página
  {path: 'dashboard', component: DashboardPageComponent}, // Rota para a nova página
  {path: '**', redirectTo: 'login'}, // Rota padrão para redirecionar para a página inicial caso a rota não exista
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
