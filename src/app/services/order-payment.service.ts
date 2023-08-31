import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {OrderPayment} from "../model/order-payment";

@Injectable({
  providedIn: 'root'
})
export class OrderPaymentService {

  private orderUri: string;

  constructor(private http: HttpClient) {
    this.orderUri = environment.urlApi + environment.basePath + '/order/';
  }

  insertPayment(payment: OrderPayment): Observable<OrderPayment> {
    return this.http.post<OrderPayment>(this.orderUri + payment.idOrder + '/payment', payment);
  }
}
