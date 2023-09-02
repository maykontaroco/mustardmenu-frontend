import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {OrderService} from "../../services/order.service";
import {Order} from "../../model/order";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sale-history-page',
  templateUrl: './sale-history-page.component.html',
  styleUrls: ['./sale-history-page.component.css'],
})
export class SaleHistoryPageComponent {
  displayedColumns: string[] = ['id', 'date', 'status', 'items', 'amount', 'detail'];
  orders: Order[] = [];
  filteredOrders: Order[] = [];
  dataSource = new MatTableDataSource(this.orders);

  constructor(private orderService: OrderService, private router: Router) {
  }

  ngOnInit() {
    this.orderService.getOrders().subscribe(value => {
      this.orders = value;
      this.refreshOrders(this.orders);
    });
  }

  refreshOrders(orders: Order[]){
    this.dataSource = new MatTableDataSource(orders);
  }

  onDetailSale(id: any) {
    console.log('id: ', id);
    this.router.navigate(['/detail/' + id]);
  }

  isCancelled(status: string): boolean {
    return status === 'Cancelada';
  }

  filterProducts(event: any) {
    console.log("filter");
    const filterValue = event.target.value.toLowerCase();
    this.filteredOrders = this.orders.filter(order =>
      ('' + order.id).toLowerCase().includes(filterValue.toLowerCase())
    );

    if(event)
      this.refreshOrders(this.filteredOrders);
    else
      this.refreshOrders(this.orders);
  }
}
