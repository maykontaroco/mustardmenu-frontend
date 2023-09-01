import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../services/order.service";
import {Order} from "../../model/order";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-sale-detail-page',
  templateUrl: './sale-detail-page.component.html',
  styleUrls: ['./sale-detail-page.component.css']
})
export class SaleDetailPageComponent {
  idOrder: number | undefined;
  order: Order | undefined;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.idOrder = Number(this.route.snapshot.paramMap.get('id'));
    this.orderService.getOrder(this.idOrder).subscribe(value => {
      this.order = value
    });
  }

  onCancel() {
    this.orderService.cancerOrder(this.idOrder!).subscribe(value => {
      this.order!.status = 'Cancelada';
      this.showSuccessSnackBar('Venda cancelada');
    }, error => {
      this.showErrorSnackBar('Erro ao cancelar a venda');
    })
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
