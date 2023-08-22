export class OrderItem {
  id: number | null;
  idOrder: number;
  idProduct: number;
  canceled: boolean;
  quantity: number;
  unitValue: number;
  totalValue: number;
  costValue: number;

  constructor(id: number | null, idOrder: number, idProduct: number, canceled: boolean, quantity: number, unitValue: number, totalValue: number, costValue: number) {
    this.id = id;
    this.idOrder = idOrder;
    this.idProduct = idProduct;
    this.canceled = canceled;
    this.quantity = quantity;
    this.unitValue = unitValue;
    this.totalValue = totalValue;
    this.costValue = costValue;
  }
}
