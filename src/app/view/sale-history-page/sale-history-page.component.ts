import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {OrderService} from "../../services/order.service";
import {Order} from "../../model/order";

@Component({
  selector: 'app-sale-history-page',
  templateUrl: './sale-history-page.component.html',
  styleUrls: ['./sale-history-page.component.css'],
})
export class SaleHistoryPageComponent {
  displayedColumns: string[] = ['id', 'date', 'status', 'items', 'amount', 'detail'];
  orders: Order[] = [];
  dataSource = new MatTableDataSource(this.orders);

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getOrders().subscribe(value => {
      this.dataSource = new MatTableDataSource(value);
    });
  }
}
