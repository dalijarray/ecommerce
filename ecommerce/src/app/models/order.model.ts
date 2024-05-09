import { CartItem } from './cartItem.model';

export class Order {
  orderId: string;
  clientId: string;
  cartItems: CartItem[];
  adress: string;
  totalPrice: number;

  constructor(orderId: string, clientId: string, cartItems: CartItem[],adress: string,  totalPrice: number) {
    this.orderId = orderId;
    this.clientId = clientId;
    this.cartItems = cartItems;
    this.adress = adress;
    this.totalPrice = totalPrice;
  }
}