import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';
import { CartItemServiceService } from '../../services/cart-item-service.service';
import { Product } from '../../models/product.model';
import { CartItem } from '../../models/cartItem.model';
import { Client } from '../../client/model/Client';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/client/services/auth.service';
import { ClientService } from 'src/app/client/services/client.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.page.html',
  styleUrls: ['./details-product.page.scss'],
})
export class DetailsProductPage implements OnInit {
  addButton :boolean = false ;
  productId: string ='';
  product: Product = new Product('', '', '', '', '', []);  
  selectedImage: string='';
  selectedQuantity: number = 1; // Default quantity
  constructor(private route: ActivatedRoute,
    private productService: ProductServiceService,
    private navCtrl: NavController,
  private cartItemService :CartItemServiceService,
   private router:Router,
   private authService: AuthService,
   private clientService : ClientService) { }
userId:string="";
user:any={}
  ngOnInit() {
    this.userId = this.authService.getUserId();
    console.log("hello!!!")
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.loadProductDetails();
      this.getClient();
    });
  }
  goBack() {
    this.navCtrl.back();
  }
  incrementQuantity() {
    const productQuantity = parseFloat(this.product.quantity);
    if (!isNaN(productQuantity) && this.selectedQuantity < productQuantity) {
      this.selectedQuantity++;
    }
  }

  decrementQuantity() {
    if (this.selectedQuantity >= 2) {
      this.selectedQuantity--;
    }
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
  buyProduct(id:string) {
    const newCartItem: CartItem = {
      productId: this.productId,
      quantity: this.selectedQuantity

    };
    this.cartItemService.createCartItem(newCartItem).subscribe((response) => {
      console.log('Product added to cart:', response);
     this.user.cartItem.push(newCartItem);


      // Implement any additional logic, such as showing a success message or navigating to the cart page
    }, (error) => {
      console.error('Error adding product to cart:', error);
      // Implement error handling, such as displaying an error message to the user
    });
    //if (!this.client.cartItems) {
     // this.client.cartItems = [];
    //}
    //this.client.cartItems.push(newCartItem);

  }
  goToCartPage() {
    this.navCtrl.navigateForward('/mycart'); // Replace '/cart' with your actual cart page route
  }
  loadProductDetails() {
    this.productService.getProductById(this.productId).subscribe(product => {
      this.product = product;
      // Set the initially selected image to the first one in the list
      this.selectedImage = product.images[0];
    });
  }
  selectImage(image: string) {
    this.selectedImage = image;
  }

  isItLoggedIn( id: string){
    this.buyProduct(id)
    if(localStorage.getItem('token')){
      this.router.navigateByUrl('/mycart')

    }
    else{
      this.router.navigateByUrl('/login')
    }
  }
}