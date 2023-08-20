import {Component} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router, private snackBar: MatSnackBar) {
    this.getProducts();
  }

  onRegisterProduct() {
    this.router.navigate(['/register-product']);
  }

  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  removeProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe(
      (response) => {
        this.showSuccessSnackBar('Produto removido com sucesso');
        this.getProducts();
      },
      (error) => {
        this.showErrorSnackBar('Erro ao remover produto');
      }
    );
  }


  showSuccessSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snackbar-success']
    });
  }

  showErrorSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snackbar-fail']
    });
  }
}
