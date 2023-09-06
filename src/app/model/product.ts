export class Product {
  id: number | null;
  active: boolean;
  name: string;
  description: string;
  code: string;
  price: number;
  costPrice: number;
  idCategory: string;
  observation: string;

  constructor(id: number | null = null, active: boolean, name: string, description: string, code: string, price: number, costPrice: number, idCategory: string, observation: string) {
    this.id = id;
    this.active = active;
    this.name = name;
    this.description = description;
    this.code = code;
    this.price = price;
    this.costPrice = costPrice;
    this.idCategory = idCategory;
    this.observation = observation;
  }
}
