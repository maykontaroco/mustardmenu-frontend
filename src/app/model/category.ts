export class Category {
  id: string | null;
  description: string;

  constructor(id: string | null = null, description: string) {
    this.id = id;
    this.description = description;
  }
}
