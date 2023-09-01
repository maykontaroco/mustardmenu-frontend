import {OrderPayment} from "./order-payment";
import {OrderItem} from "./order-item";

export class Order {
  id: number | null;
  status: string;
  date: Date;
  updateDate: Date;
  idCashier: number;
  idUser: number;
  idClient: number;
  amount: number;
  addition: number;
  discount: number;
  observation: string;
  items: OrderItem[];
  payments: OrderPayment[];

  constructor(id: number | null, status: string, date: Date, updateDate: Date, idCashier: number, idUser: number, idClient: number, amount: number, addition: number, discount: number, observation: string, items: OrderItem[], payments: OrderPayment[]) {
    this.id = id;
    this.status = status;
    this.date = date;
    this.updateDate = updateDate;
    this.idCashier = idCashier;
    this.idUser = idUser;
    this.idClient = idClient;
    this.amount = amount;
    this.addition = addition;
    this.discount = discount;
    this.observation = observation;
    this.items = items;
    this.payments = payments;
  }

}
