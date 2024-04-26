import { Component, OnInit } from '@angular/core';
import { CartItemServiceService } from '../../services/cart-item-service.service';
import { CartItem } from '../../models/cartItem.model';
import { ProductServiceService } from '../../services/product-service.service'; // Import ProductService
import { Product } from '../../models/product.model'; // Import Product model
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.page.html',
  styleUrls: ['./mycart.page.scss'],
})
export class MycartPage implements OnInit {
  
   
  constructor(
    private cartService: CartItemServiceService,
    private navCtrl: NavController,
    private productService: ProductServiceService
  ) { }

  ngOnInit() {
    
  }
  goBack() {
    this.navCtrl.back();
  }
  
}



