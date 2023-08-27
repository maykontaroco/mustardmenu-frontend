import {Component} from '@angular/core';
import {PaymentTypes} from "../../enumerator/payment-type";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../../model/order";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-sale-payment-page',
  templateUrl: './sale-payment-page.component.html',
  styleUrls: ['./sale-payment-page.component.css']
})
export class SalePaymentPageComponent {
  paymentTypes = PaymentTypes;
  form: FormGroup;
  order: Order | undefined;


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private orderService: OrderService) {
    this.form = this.fb.group({
      observation: ['']
    });
  }

  ngOnInit() {
    const idOrder = Number(this.route.snapshot.paramMap.get('id'));
    console.log('get Order: ', idOrder);

    this.orderService.getOrder(idOrder).subscribe(value => {
      this.order = value
    });
  }


  addPayment() {
    console.log('add payment: ', this.order);

  }

  addAddition(value: number) {
    if (this.order !== undefined) {
      this.order.addition = value;
      this.orderService.refreshTotal(this.order);
    }
  }

  addDiscount(value: number) {
    if (this.order !== undefined) {
      this.order.discount = value;
      this.orderService.refreshTotal(this.order);
    }
  }
}
