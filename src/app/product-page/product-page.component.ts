import { Component } from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";
import {Md5} from "ts-md5";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  registerProduct() {
    this.router.navigate(['/register-product']);
  }
}
