export class Product {
  id: number | null;
  active: boolean;
  description: string;
  code: string;
  name: string;
  price: number;
  costPrice: number;
  idCategory: string;
  observation: string;

  constructor(id: number | null = null, active: boolean, description: string, code: string, name: string, price: number, costPrice: number, idCategory: string, observation: string) {
    this.id = id;
    this.active = active;
    this.description = description;
    this.code = code;
    this.name = name;
    this.price = price;
    this.costPrice = costPrice;
    this.idCategory = idCategory;
    this.observation = observation;
  }
}
