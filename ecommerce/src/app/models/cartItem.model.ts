export class CartItem {
    id?: string;
    productId: string;
    quantity: number;
   
  
    constructor(id: string, productId: string, quantity: number) {
      this.id = id;
      this.productId=productId;
      this.quantity = quantity;
      
    }
  }