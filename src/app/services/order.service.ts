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
  private cancelOrderUri: string;

  constructor(private http: HttpClient) {
    this.orderUri = environment.urlApi + environment.basePath + '/order';
    this.createOrderUri = this.orderUri + '/create';
    this.cancelOrderUri = this.orderUri + '/{id}/cancel';
  }

  getOrder(idOrder: number): Observable<Order> {
    return this.http.get<Order>(this.orderUri + '/' + idOrder);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUri);
  }

  insertOrder(): Observable<Order> {
    return this.http.post<Order>(this.createOrderUri, null);
  }

  cancerOrder(id: number): Observable<Order> {
    return this.http.put<Order>(this.cancelOrderUri.replace('{id}', '' + id), null);
  }

  // Business Rules
  setItems(order: Order, items: OrderItem[]) {
    order.items = items;
    this.refreshTotal(order);
  }

  refreshTotal(order: Order) {
    order.amount = 0;
    order.items.forEach(item => {
      order.amount += item.totalValue;
    })
    order.amount += order.addition;
    order.amount -= order.discount;
  }
}
