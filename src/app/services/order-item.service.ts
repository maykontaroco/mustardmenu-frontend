import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {OrderItem} from "../model/order-item";

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  private orderUri: string;

  constructor(private http: HttpClient) {
    this.orderUri = environment.urlApi + environment.basePath + '/order/';
  }

  insertItem(item: OrderItem): Observable<OrderItem> {
    return this.http.post<OrderItem>(this.orderUri + item.idOrder + '/item', item);
  }

  removeItem(item: OrderItem): Observable<OrderItem> {
    const removeItem = this.orderUri + item.idOrder + '/item/' + item.id + '/cancel';
    return this.http.put<OrderItem>(removeItem, null);
  }

  addQuantity(item: OrderItem): Observable<OrderItem> {
    const addQuantityUri = this.orderUri + item.idOrder + '/item/' + item.id + '/quantity/add';
    return this.http.put<OrderItem>(addQuantityUri, null);
  }

  removeQuantity(item: OrderItem): Observable<OrderItem> {
    const removeQuantityUri = this.orderUri + item.idOrder + '/item/' + item.id + '/quantity/remove';
    return this.http.put<OrderItem>(removeQuantityUri, null);
  }
}
