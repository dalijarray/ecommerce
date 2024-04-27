export class Product {
  id!: string;
  title: string;
  description: string;
  price: string;
  images: string[];
  category: string;
  quantity: string;
  creationDate!: Date; 
  
  constructor(
              title: string = '',
              description: string = '',
              price: string = '',
              quantity: string = '',
              category: string = '',
              images: string[] = []) {
    
    this.title = title;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.images = images;
    // Ne pas initialiser la date de création ici
  }
}
