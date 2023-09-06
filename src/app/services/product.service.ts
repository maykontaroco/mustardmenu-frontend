import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUri: string;

  constructor(private http: HttpClient) {
    this.productUri = environment.urlApi + environment.basePath + '/product';
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUri);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.productUri + '/' + id);
  }

  insertProduct(product: Product): Observable<any> {
    return this.http.post<Product>(this.productUri, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put<Product>(this.productUri + '/' + product.id, product);
  }

  deleteProduct(product: Product): Observable<any> {
    product.active = false;
    return this.http.put<Product>(this.productUri + "/" + product.id, product);
  }
}
