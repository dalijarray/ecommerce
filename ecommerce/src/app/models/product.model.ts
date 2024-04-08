export class Product {
    id: string;
    title: string;
    description: string;
    price: number;
    images: string[];
  
    constructor(id: string, title: string, description: string, price: number, images: string[]) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.images = images;
    }
  }
  