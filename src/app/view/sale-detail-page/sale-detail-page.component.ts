import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../services/order.service";
import {Order} from "../../model/order";
import {PaymentTypes} from "../../enumerator/payment-type";

@Component({
  selector: 'app-sale-detail-page',
  templateUrl: './sale-detail-page.component.html',
  styleUrls: ['./sale-detail-page.component.css']
})
export class SaleDetailPageComponent {
  idOrder: number | undefined;
  order: Order | undefined;

  constructor(private route: ActivatedRoute, private orderService: OrderService) {

  }

  ngOnInit() {
    this.idOrder = Number(this.route.snapshot.paramMap.get('id'));
    this.orderService.getOrder(this.idOrder).subscribe(value => {
      this.order = value
    });
  }

  protected readonly PaymentTypes = PaymentTypes;
}
