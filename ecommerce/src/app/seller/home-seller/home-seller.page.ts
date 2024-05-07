import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular'; // Importez NavController pour naviguer vers la page de modification

import { CheckboxCustomEvent } from '@ionic/angular';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-seller',
  templateUrl: './home-seller.page.html',
  styleUrls: ['./home-seller.page.scss'],
})
export class HomeSellerPage implements OnInit {
  showForm: boolean = false;
  isHomeActive: boolean = true; // Déclaration et initialisation de la propriété isHomeActive
  product: Product | null = null;
  products: Product[]=[];
  originalProducts: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  constructor(
    private alertController: AlertController,
    private productService: ProductServiceService,
    private navController: NavController
    , private router: Router) { }

  ngOnInit() {this.loadProducts();}
  loadProducts() {
    this.productService.getAllProducts().subscribe(
      (products: Product[]) => {
        this.products = products.map(product => {
          // Vérifiez si le produit a une image
          if (product.images) {
            // Convertissez l'image en base64
            return {
              ...product,
              image: 'data:image/jpeg;base64,' + product.images // Changez 'jpeg' en 'png' si nécessaire
            };
          } else {
            return product;
          }
        });
        this.originalProducts = [...this.products];
        console.log('Produits chargés :', this.products);
        
      },
      (error: any) => {
        console.log('Erreur lors du chargement des produits :', error);
      }
    );
  }

 /* 
  ajouterArticle(articleData: any) {
    // Appeler la méthode du service pour ajouter l'article
    this.produitService.ajouterProduit(articleData).subscribe(
      (response) => {
        console.log('Article ajouté avec succès!', response);
        // Réinitialisez les champs du formulaire si nécessaire
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'article:', error);
      }
    );
  }
*/
/*
modifierArticle(productId: string) {
  // Récupérer l'article à modifier en fonction de son ID
  this.productService.getProductById(productId).subscribe(
    (article) => {
      // Afficher une alerte de confirmation pour la modification de l'article
      this.presentConfirmationAlert('Êtes-vous sûr de vouloir modifier cet article?', () => {
        // Appeler la méthode de service pour mettre à jour l'article dans la base de données
        this.productService.updateProduct(productId, article).subscribe(
          (response) => {
            console.log('Article modifié avec succès:', response);
            // Réinitialiser le formulaire ou effectuer d'autres actions après la modification réussie
          },
          (error) => {
            console.error('Erreur lors de la modification de l\'article:', error);
            // Gérer l'erreur, par exemple afficher un message à l'utilisateur
          }
        );
      });
    },
    (error) => {
      console.error('Erreur lors de la récupération de l\'article à modifier:', error);
      // Gérer l'erreur, par exemple afficher un message à l'utilisateur
    }
  );
}

// Méthode pour afficher une alerte de confirmation
async presentConfirmationAlert(message: string, callback: () => void) {
  const alert = await this.alertController.create({
    header: 'Confirmation',
    message: message,
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Annulation de la modification');
        }
      }, {
        text: 'Oui',
        handler: () => {
          // Appeler le callback fourni
          callback();
        }
      }
    ]
  });

  await alert.present();
}
*/

  // Méthode pour filtrer les produits en fonction du terme de recherche
  filterProducts() {
    if (!this.searchTerm.trim()) {
      this.products = [...this.originalProducts];
      return;
    }

    this.products = this.originalProducts.filter(product =>
      product.title.toLowerCase().includes(this.searchTerm.trim().toLowerCase())
    );
  }

  onSearchInput(event: any) {
    this.filterProducts();
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.filterProducts();
    }
  }


  async supprimer(productId: string) {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Êtes-vous sûr de vouloir supprimer cet article?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Annulation de la suppression');
          }
        }, {
          text: 'Oui',
          handler: () => {
            this.supprimerArticle(productId);
          }
        }
      ]
    });

    await alert.present();
  }
 
  NavigateToEdit(productId: string) {
 this.router.navigate([`/tabs/edit-article`,productId]);
  }
  
  supprimerArticle(productId: string) {
    console.log('ID du produit à supprimer :', productId);
    this.productService.deleteProduct(productId).subscribe(
      (response) => {
        console.log('Article supprimé avec succès:', response);
        // Réinitialiser le formulaire ou effectuer d'autres actions après la suppression réussie
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'article:', error);
        // Gérer l'erreur, par exemple afficher un message à l'utilisateur
      }
    );
  }
}
