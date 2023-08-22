import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Order} from "../model/order";
import {OrderItem} from "../model/order-item";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUri: string;
  private createOrderUri: string;

  constructor(private http: HttpClient) {
    this.orderUri = environment.urlApi + environment.basePath + '/order';
    this.createOrderUri = this.orderUri + '/create';
  }

  insertOrder(): Observable<Order> {
    return this.http.post<Order>(this.createOrderUri, null);
  }


  // Business Rules
  setItems(order: Order, items: OrderItem[]) {
    order.items = items;

    order.amount = 0;
    items.forEach(item => {
      order.amount += item.totalValue;
    })
  }
}
