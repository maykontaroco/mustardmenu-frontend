import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HomePageComponent} from './home-page/home-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BodyComponent} from "./body/body.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MatListModule} from '@angular/material/list';
import {ToastrModule} from "ngx-toastr";
import {SalePageComponent} from './sale-page/sale-page.component';
import {CdkListbox} from "@angular/cdk/listbox";


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    LoginPageComponent,
    HomePageComponent,
    DashboardPageComponent,
    SidenavComponent,
    SalePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatListModule,
    ToastrModule.forRoot(),
    CdkListbox,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
