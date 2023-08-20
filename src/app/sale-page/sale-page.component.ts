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
  filteredProducts: Product[] = [];
  orderItems: OrderItem[] = [];

  constructor(private productService: ProductService) {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    });
  }
  addItem(product: Product){
    console.log(product);
    this.orderItems.push({description: product.description, price: product.price.toFixed(2), quantity: "1"})
  }

  filterProducts(event: any) {
    console.log("filter");
    const filterValue = event.target.value.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
}
