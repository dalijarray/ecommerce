import { Component, OnInit } from '@angular/core';
import { CartItemServiceService } from '../../services/cart-item-service.service';
import { CartItem } from '../../models/cartItem.model';
import { ProductServiceService } from '../../services/product-service.service'; // Import ProductService
import { Product } from '../../models/product.model'; // Import Product model
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/client/services/auth.service';
import { ClientService } from 'src/app/client/services/client.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.page.html',
  styleUrls: ['./mycart.page.scss'],
})
export class MycartPage implements OnInit {
  cartItems: CartItem[] = [];
  products: Product[] = [];
  totalPrice: number = 0;
  userId:string='';
  user: any={};
  constructor(
    private cartItemService: CartItemServiceService,
    private navCtrl: NavController,
    private productService: ProductServiceService,
    private router: Router,
    private authService: AuthService,
    private clientService : ClientService
  ) { }

  ngOnInit() {
    this.loadCartItems();
    this.userId = this.authService.getUserId();
  }
  goBack() {
    this.navCtrl.back();
  }
  getClient(){
    this.clientService.getClientById(this.userId).subscribe(
      (response) => {
        this.user = response; // Stockez les informations de l'utilisateur dans la variable 'user'
        console.log('Informations de l\'utilisateur :', this.user);
      },
      (error) => {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
      }
    );
  }
  loadCartItems() {
    // Retrieve all cart items from the backend
    this.user.CartItem
    this.cartItemService.getAllCartItems().subscribe((cartItems) => {
      this.cartItems = cartItems;
      // Once cart items are loaded, load products for each cart item
      this.loadProducts();
    });
  }
  loadProducts() {
    // Retrieve products for each cart item
    this.cartItems.forEach((cartItem, index) => {
      this.productService.getProductById(cartItem.productId).subscribe((product) => {
        this.products[index] = product;
        this.calculateTotalPrice();
      });
    });
  }
  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, cartItem) => {
      const product = this.products.find(p => p.id === cartItem.productId);
      if (product  && !isNaN(parseFloat(product.price))) {
        const price = parseFloat(product.price); // Convert price to a number
        return total + (price * cartItem.quantity);
      } else {
        // Handle cases where product or product.price is invalid
        return total;
      }}, 0);
      this.totalPrice = parseFloat(this.totalPrice.toFixed(2));
  }
  incrementQuantity(index: number) {
    // Increment quantity for the product at the specified index in the cart
    this.cartItems[index].quantity++;
    this.calculateTotalPrice();
  }

  decrementQuantity(index: number) {
    // Decrement quantity for the product at the specified index in the cart
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    }
    this.calculateTotalPrice();
  }
  deleteCartItem(index: number) {
    const cartItemId = this.cartItems[index].id;
    // Remove the cart item at the specified index from the cartItems array
    this.cartItems.splice(index, 1);
    // Optionally, you can also remove the corresponding product from the products array
    this.products.splice(index, 1);
    this.cartItemService.deleteCartItem(cartItemId!).subscribe(
      () => {
        console.log('Cart item deleted successfully.');
      },
      (error) => {
        console.error('Error deleting cart item:', error);
      }
    );
    this.calculateTotalPrice();
  }
  order(totalPrice: number) {
    // Navigate to the payment page and pass the total price as a query parameter
    this.router.navigate(['/payment'], { queryParams: { totalPrice } });
  }


}


