import {Component} from '@angular/core';
import {PaymentType, PaymentTypes} from "../../enumerator/payment-type";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Order} from "../../model/order";
import {OrderService} from "../../services/order.service";
import {MatDialog} from "@angular/material/dialog";
import {PopupAdditionComponent} from "../popup-addition/popup-addition.component";
import {PopupDiscountComponent} from "../popup-discount/popup-discount.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {OrderPayment} from "../../model/order-payment";
import {OrderPaymentService} from "../../services/order-payment.service";

@Component({
  selector: 'app-sale-payment-page',
  templateUrl: './sale-payment-page.component.html',
  styleUrls: ['./sale-payment-page.component.css']
})
export class SalePaymentPageComponent {
  paymentTypes = PaymentTypes;
  form: FormGroup;
  order: Order | undefined;
  orderPaymenets: OrderPayment[] = [];


  constructor(private orderPaymentService: OrderPaymentService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private orderService: OrderService, public dialog: MatDialog, private snackBar: MatSnackBar) {
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

  addPayment(paymentType: PaymentType) {
    const payment: OrderPayment = {
      id: null,
      idOrder: this.order?.id!,
      type: paymentType?.type,
      value: this.order?.amount!
    }

    this.orderPaymentService.insertPayment(payment).subscribe(
      value => {
        this.orderPaymenets = [];
        this.orderPaymenets.push(value);
        console.log('add payment: ', this.orderPaymenets);

        this.showSuccessSnackBar('Venda finalizada');
        this.router.navigate(['/sale']);
      },
      error => {
        this.showErrorSnackBar('Erro ao inserir pagamento');
      }
    );
  }

  addAddition(value: number) {
    if (this.order == null)
      return;

    this.order.addition = value;
    this.orderService.refreshTotal(this.order);
  }

  addDiscount(value: number) {
    if (this.order == null)
      return;

    if (value >= (this.order.amount + this.order.discount)) {
      this.showErrorSnackBar('Desconto inválido');
      return;
    }

    this.order.discount = value;
    this.orderService.refreshTotal(this.order);
  }

  openAdditionDialog(): void {
    let dialogRef = this.dialog.open(PopupAdditionComponent, {
      width: '300px',
      height: '200px',
    });

    dialogRef.afterClosed().subscribe(value => {
      if (value != null && !isNaN(value))
        this.addAddition(value);
      else if (isNaN(value))
        this.addAddition(0);
    });
  }

  openDiscountDialog(): void {
    let dialogRef = this.dialog.open(PopupDiscountComponent, {
      width: '300px',
      height: '200px',
    });

    dialogRef.afterClosed().subscribe(value => {
      if (value != null && !isNaN(value))
        this.addDiscount(value);
      else if (isNaN(value))
        this.addDiscount(0);
    });
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
