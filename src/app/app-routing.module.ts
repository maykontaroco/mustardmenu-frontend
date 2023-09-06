import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./view/login-page/login-page.component";
import {DashboardPageComponent} from "./view/dashboard-page/dashboard-page.component";
import {HomePageComponent} from "./view/home-page/home-page.component";
import {SalePageComponent} from "./view/sale-page/sale-page.component";
import {ProductPageComponent} from "./view/product-page/product-page.component";
import {RegisterProductPageComponent} from "./view/register-product-page/register-product-page.component";
import {SalePaymentPageComponent} from "./view/sale-payment-page/sale-payment-page.component";
import {SaleHistoryPageComponent} from "./view/sale-history-page/sale-history-page.component";
import {SaleDetailPageComponent} from "./view/sale-detail-page/sale-detail-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'}, // Rota padrão para a página inicial
  {path: 'login', component: LoginPageComponent}, // Rota para a página inicial (outra página já existente)
  {path: 'home', component: HomePageComponent}, // Rota para a nova página
  {path: 'sale', component: SalePageComponent}, // Rota para a nova página
  {path: 'payment/:id', component: SalePaymentPageComponent}, // Rota para a nova página
  {path: 'history', component: SaleHistoryPageComponent}, // Rota para a nova página
  {path: 'detail/:id', component: SaleDetailPageComponent}, // Rota para a nova página
  {path: 'product', component: ProductPageComponent}, // Rota para a nova página
  {path: 'register-product', component: RegisterProductPageComponent}, // Rota para a nova página
  {path: 'register-product/:id', component: RegisterProductPageComponent}, // Rota para a nova página
  {path: 'dashboard', component: DashboardPageComponent}, // Rota para a nova página
  {path: '**', redirectTo: 'login'}, // Rota padrão para redirecionar para a página inicial caso a rota não exista
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
