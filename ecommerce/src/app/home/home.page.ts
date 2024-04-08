import { Component } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  canDismiss = false;

  presentingElement = null;
  showSearch: boolean = false;


  
  products: Product[]=[];
  images:String[]=[];
  constructor(private productService: ProductServiceService) {}
  
  ngOnInit() {
    this.loadProducts();
    // this.presentingElement = document.querySelector('.ion-page');
    console.log("ola")
  }
  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
  loadProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
      
    });
  }
  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }
}
