import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';
import { CartItemServiceService } from '../../services/cart-item-service.service';
import { Product } from '../../models/product.model';
import { CartItem } from '../../models/cartItem.model';
import { NavController } from '@ionic/angular';

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
  private cartItemService :CartItemServiceService) { }

  ngOnInit() {
    console.log("hello!!!")
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.loadProductDetails();
    });
  }
  goBack() {
    this.navCtrl.back();
  }
  incrementQuantity() {
    if (this.selectedQuantity < 10) {
      this.selectedQuantity++;
    }
  }

  decrementQuantity() {
    if (this.selectedQuantity > 1) {
      this.selectedQuantity--;
    }
  }
  buyProduct(id:string) {
    const newCartItem: CartItem = {
      productId: id,
      quantity: this.selectedQuantity
    };
    this.cartItemService.createCartItem(newCartItem).subscribe((response) => {
      console.log('Product added to cart:', response);
      // Implement any additional logic, such as showing a success message or navigating to the cart page
    }, (error) => {
      console.error('Error adding product to cart:', error);
      // Implement error handling, such as displaying an error message to the user
    });
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
}
