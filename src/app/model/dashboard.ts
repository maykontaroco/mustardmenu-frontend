export class Dashboard {
  type: string;
  description: string;
  value: number;

  constructor(type: string, description: string, value: number) {
    this.type = type;
    this.description = description;
    this.value = value;
  }
}
