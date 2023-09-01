import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './view/login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HomePageComponent} from './view/home-page/home-page.component';
import {DashboardPageComponent} from './view/dashboard-page/dashboard-page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BodyComponent} from "./body/body.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MatListModule} from '@angular/material/list';
import {ToastrModule} from "ngx-toastr";
import {SalePageComponent} from './view/sale-page/sale-page.component';
import {CdkListbox} from "@angular/cdk/listbox";
import {ProductPageComponent} from './view/product-page/product-page.component';
import {RegisterProductPageComponent} from './view/register-product-page/register-product-page.component';
import {NgxMaskModule} from 'ngx-mask';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {SalePaymentPageComponent} from './view/sale-payment-page/sale-payment-page.component';
import { PopupAdditionComponent } from './view/popup-addition/popup-addition.component';
import {MatDialogModule} from "@angular/material/dialog";
import { PopupDiscountComponent } from './view/popup-discount/popup-discount.component';
import { SaleHistoryPageComponent } from './view/sale-history-page/sale-history-page.component';
import {MatTableModule} from "@angular/material/table";
import { SaleDetailPageComponent } from './view/sale-detail-page/sale-detail-page.component';

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
    SalePaymentPageComponent,
    PopupAdditionComponent,
    PopupDiscountComponent,
    SaleHistoryPageComponent,
    SaleDetailPageComponent,
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
    MatIconModule,
    MatDialogModule,
    MatTableModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {

}
