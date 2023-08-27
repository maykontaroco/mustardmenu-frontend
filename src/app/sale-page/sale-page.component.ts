import {Component} from '@angular/core';
import {OrderItem} from "../model/order-item";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product";
import {OrderService} from "../services/order.service";
import {Order} from "../model/order";
import {lastValueFrom} from "rxjs";
import {OrderItemService} from "../services/order-item.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.css']
})
export class SalePageComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  orderItems: OrderItem[] = [];
  order!: Order;

  constructor(private productService: ProductService, private orderService: OrderService, private orderItemService: OrderItemService, private router: Router) {
    this.getProducts();
  }

  //API
  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  async createOrder() {
    const order = await lastValueFrom(this.orderService.insertOrder());
    this.order = order;
  }

  async createItem(product: Product) {
    const item = {
      id: null,
      idOrder: this.order.id!,
      idProduct: product.id!,
      canceled: false,
      quantity: 1,
      unitValue: product.price,
      totalValue: product.price,
      costValue: product.costPrice,
      description: product.description,
    }

    console.log('item: ', item);
    const itemReturn = await lastValueFrom(this.orderItemService.insertItem(item));
    console.log('itemReturn: ', itemReturn);
    this.orderItems.push(itemReturn);
    this.refreshOrder();
  }

  //Methods
  async addItem(product: Product) {
    if (this.order == null)
      await this.createOrder();

    this.createItem(product);
  }

  addQuantity(item: OrderItem) {
    this.orderItemService.addQuantity(item).subscribe(response => {
      const index = this.orderItems.indexOf(item);
      this.orderItems[index] = response;
      this.refreshOrder();
    });
  }

  removeQuantity(item: OrderItem) {
    //cancel item
    if (item.quantity == 1) {
      this.orderItemService.removeItem(item).subscribe(value => {
        const index = this.orderItems.indexOf(item);
        this.orderItems.splice(index, 1);
        this.refreshOrder();
      })
      return;
    }

    //remove quantity
    this.orderItemService.removeQuantity(item).subscribe(response => {
      const index = this.orderItems.indexOf(item);
      this.orderItems[index] = response;
      this.refreshOrder();
    });
  }

  refreshOrder() {
    this.orderService.setItems(this.order, this.orderItems);
  }

  filterProducts(event: any) {
    const filterValue = event.target.value.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  findProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  openSalePayment() {
    this.router.navigate(['/payment', this.order.id]);
  }
}
