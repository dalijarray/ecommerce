export class Product {
    id: string;
    title: string;
    description: string;
    price: string;
    images: string[];
    category: string;
    creationDate: Date; 
  
    constructor(id: string, title: string, description: string, price: string, category: string, images: string[]) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.category = category;
      this.images = images;
      this.creationDate = new Date();
    }
  }
  