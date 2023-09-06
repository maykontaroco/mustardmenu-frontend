import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../model/product";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-register-product-page',
  templateUrl: './register-product-page.component.html',
  styleUrls: ['./register-product-page.component.css']
})
export class RegisterProductPageComponent implements OnInit {
  productForm: FormGroup;
  formSubmitted = false;
  categories: Category[] = [];
  product: Product | undefined;

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.getCategories();
    this.productForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      costPrice: [''],
      selectedCategory: [this.categories[0]],
      observation: ['']
    });
  }

  ngOnInit(): void {
    const idProduct = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(idProduct).subscribe(value => {
      this.product = value;

      this.productForm = this.fb.group({
        code: [value.code, Validators.required],
        name: [value.name, Validators.required],
        description: [value.description, Validators.required],
        price: [value.price, Validators.required],
        costPrice: [value.costPrice],
        selectedCategory: [this.getCategoryById(value.idCategory)],
        observation: [value.observation]
      });
    });
  }

  onDiscard() {
    this.backPage();
  }

  onSave() {
    this.formSubmitted = true;
    if (this.productForm.valid) {
      const product = new Product(
        this.product != null ? this.product.id : null,
        true,
        this.productForm.value.name,
        this.productForm.value.description,
        this.productForm.value.code,
        parseFloat(this.productForm.value.price),
        parseFloat(this.productForm.value.costPrice),
        this.productForm.value.selectedCategory.id
        ,
        this.productForm.value.observation
      );

      if (this.product == null) {
        this.productService.insertProduct(product).subscribe(
          (response) => {
            this.showSuccessSnackBar('Produto inserido com sucesso');
            this.backPage();
          },
          (error) => {
            this.showErrorSnackBar('Erro ao inserir produto');
          }
        );
      } else {
        this.productService.updateProduct(product).subscribe(
          (response) => {
            this.showSuccessSnackBar('Produto atualizado com sucesso');
            this.backPage();
          },
          (error) => {
            this.showErrorSnackBar('Erro ao atualizar produto');
          }
        );
      }
    }
  }

  backPage() {
    this.router.navigate(['/product']);
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  getCategoryById(idCategory: string) {
    return this.categories.find(category => category.id === idCategory);
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
