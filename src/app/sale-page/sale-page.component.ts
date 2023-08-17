import {Component} from '@angular/core';
import {OrderItem} from "../model/order-item";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.css']
})
export class SalePageComponent {
  products: Product[] = [];
  orderItems: OrderItem[] = [];

  constructor(private productService: ProductService) {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
  addItem(product: Product){
    console.log(product);
    this.orderItems.push({description: product.description, price: product.price.toFixed(2), quantity: "1"})
  }
}
