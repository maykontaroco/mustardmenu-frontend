import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {OrderPayment} from "../model/order-payment";

@Injectable({
  providedIn: 'root'
})
export class OrderPaymentService {

  private orderPaymentUri: string;

  constructor(private http: HttpClient) {
    this.orderPaymentUri = environment.urlApi + environment.basePath + '/order/{id}/payment';
  }

  insertPayment(payment: OrderPayment): Observable<OrderPayment> {
    return this.http.post<OrderPayment>(this.orderPaymentUri.replace('{id}', '' + payment.idOrder), payment);
  }
}
