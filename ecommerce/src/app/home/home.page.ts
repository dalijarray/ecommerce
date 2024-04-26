import { Component } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';
import { ProductServiceService } from '../services/product-service.service';
import { CartItemServiceService } from '../services/cart-item-service.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  canDismiss = false;
 
  showCategorie = false;
  showSearch: boolean = false;
  selectedCategory: string='';
  products: Product[]=[];
  originalProducts: Product[] = [];
  selectedSort: string='test';
  searchInput: string = '';
  categories: string[] = ['All','Shirts', 'Jeans', 'Shorts', 'Dresses','Jackets','Bags','Shoes','Accessories'];
  showSort=false;
  items:number=0;
  constructor(private productService: ProductServiceService,private router: Router,private cartItemService:CartItemServiceService) {}
  
  ngOnInit() {
    this.setItems();
    this.loadProducts();
    }
    navigateToCart(){
      this.router.navigate(['/mycart']);
    }
setItems(){
  this.cartItemService.getTotalCartItems().subscribe(
    total => {
      this.items = total;
    },
    error => {
      console.error('Error fetching total cart items:', error);
      // Handle error
    }
  );
}
 loadProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
      this.originalProducts =products; },
      (error) => {
        console.log('Error fetching products:', error);
      }
    );
  }
  toggleSearch() {
    this.showSearch = !this.showSearch;
    console.log(this.searchInput);
    console.log("test");
    if (!this.showSearch) {
      this.searchInput = '';
      this.products = this.originalProducts;
      console.log(this.searchInput);
    }
  }
  navigateToProductDetails(productId: string) {
    this.router.navigate(['/details-product', productId]);
  }
  
  sortProducts(sortOption: string) {
    console.log(sortOption);
    switch (sortOption) {
      case 'newest':
        // Sort products by newest arrivals
        this.products.sort((a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime());
        break;
      case 'highToLow':
        // Sort products by price high to low
        this.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'lowToHigh':
        // Sort products by price low to high
        this.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      default:
        break;
    }
    this.showSort = false;
  }
  searchProducts() {
    if (!this.searchInput) {
      this.products = this.originalProducts;
      return;
    }
    const searchText = this.searchInput.toLowerCase();
    this.products = this.originalProducts.filter(product =>
      product.title.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText) //||
      //product.category.toLowerCase().includes(searchText)
    );
  }
  showCategories() {
    this.showCategorie = !this.showCategorie;
  }
  showSorting() {
    this.showSort = !this.showSort;
  }

  selectCategory(category: string) {
    // Filter products based on the selected category
    if (category==='All') {
      this.products = this.originalProducts;
    } else {
      this.products = this.originalProducts.filter(product => product.category === category);
    }
    
    // Hide the categories list
    this.showCategorie = false;
  }
  
}
