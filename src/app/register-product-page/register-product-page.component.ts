import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../model/product";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register-product-page',
  templateUrl: './register-product-page.component.html',
  styleUrls: ['./register-product-page.component.css']
})
export class RegisterProductPageComponent {
  productForm: FormGroup;
  formSubmitted = false;

  constructor(private productService: ProductService, private router: Router, private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.productForm = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      costPrice: ['', Validators.required],
      idCategory: ['', Validators.required],
      observation: [''],
    });
  }

  onDiscard() {
    this.backPage();
  }

  onSave() {
    this.formSubmitted = true;
    if (this.productForm.valid) {
      const product = new Product(
        null,
        true,
        this.productForm.value.description,
        this.productForm.value.code,
        this.productForm.value.description,
        parseFloat(this.productForm.value.price),
        parseFloat(this.productForm.value.costPrice),
        this.productForm.value.idCategory,
        this.productForm.value.observation
      );

      this.productService.insertProduct(product).subscribe(
        (response) => {
          this.showSuccessSnackBar('Produto inserido com sucesso');
          this.backPage();
        },
        (error) => {
          this.showErrorSnackBar('Erro ao inserir produto');
        }
      );
    }
  }

  backPage() {
    this.router.navigate(['/product']);
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
