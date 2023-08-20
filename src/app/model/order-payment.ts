export class OrderPayment {
  id: number | null;
  idOrder: number;
  type: string;
  value: number;

  constructor(id: number | null, idOrder: number, type: string, value: number) {
    this.id = id;
    this.idOrder = idOrder;
    this.type = type;
    this.value = value;
  }
}
