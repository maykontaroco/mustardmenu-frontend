import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { ProductPageComponent } from './product-page/product-page.component';
import { RegisterProductPageComponent } from './register-product-page/register-product-page.component';
import { NgxMaskModule } from 'ngx-mask';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    LoginPageComponent,
    HomePageComponent,
    DashboardPageComponent,
    SidenavComponent,
    SalePageComponent,
    ProductPageComponent,
    RegisterProductPageComponent,
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
    NgxMaskModule.forRoot(),
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
