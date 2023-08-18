import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../model/product";

@Component({
  selector: 'app-register-product-page',
  templateUrl: './register-product-page.component.html',
  styleUrls: ['./register-product-page.component.css']
})
export class RegisterProductPageComponent {
  productForm: FormGroup;

  constructor(private productService: ProductService, private router: Router, private fb: FormBuilder,) {
    this.productForm = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      costPrice: ['', Validators.required],
      idCategory: ['', Validators.required],
      observation: ['', Validators.required],
    });
  }

  discard() {
    this.router.navigate(['/product']);
  }

  save() {
    console.log('save');
    if (this.productForm.valid) {
      console.log('valid');

      const product = new Product(
        null,
        true,
        this.productForm.value.description,
        this.productForm.value.code,
        '',
        this.productForm.value.price,
        this.productForm.value.costPrice,
        this.productForm.value.idCategory,
        this.productForm.value.observation
      );

      console.log(product);
      this.productService.insertProduct(product).subscribe(
        (response) => {
          console.log('Produto inserido com sucesso:', response);
        },
        (error) => {
          console.error('Erro ao inserir produto:', error);
        }
      );
      ;
    }
  }
}
