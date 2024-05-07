import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';
//import { Product } from '../models/product.models';
import { AlertController, NavController } from '@ionic/angular';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.page.html',
  styleUrls: ['./edit-article.page.scss'],
})
export class EditArticlePage implements OnInit {
  productId: string = '';
  product: Product = new Product( '', '', '', '','', []);

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private alertController: AlertController,
    private navController: NavController
   
  ) { }

 
  ngOnInit() {
    // Récupérer l'ID du paramètre de l'URL
    this.productId = this.route.snapshot.paramMap.get('id') || '';

    // Appeler la méthode du service pour récupérer les données du produit par ID
    this.productService.getProductById(this.productId).subscribe(
      (product: Product) => {
        // Affecter les données du produit récupéré à la variable product
        this.product = product;
        console.log(this.product);
      },
      (error: any) => {
        console.error('Erreur lors de la récupération du produit:', error);
      }
    );
  }

  goBack() {
    this.navController.back();
  }
/*
  loadProduct() {
    this.productService.getProductById(this.productId).subscribe(
      (product: Product) => {
        this.product = product;
      },
      (error: any) => {
        console.error('Error loading product:', error);
      }
    );
  }*/

  modifierArticle() {
  
 // Appeler la méthode du service pour mettre à jour le produit avec les nouvelles données
 this.productService.updateProduct(this.productId, this.product).subscribe(
  (response) => {
    console.log('Article mis à jour avec succès:', response);
    // Rediriger vers la page d'accueil du vendeur après la mise à jour réussie
    this.navController.navigateBack('/tabs/home-seller');
  },
  (error) => {
    console.error('Erreur lors de la mise à jour de l\'article:', error);
    // Gérer l'erreur, par exemple afficher un message à l'utilisateur
  }
);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'SSuccès',
      message: 'Produit modifié avec succès',
      buttons: ['OK']
    });

    await alert.present();
  }
  fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result as string;
        const base64Image = base64String.split(',')[1]; // Supprimer le préfixe "data:image/jpeg;base64," ou similaire
        const extension = this.getFileExtension(file.name);
        const prefixedBase64Image = `data:image/${extension};base64,${base64Image}`;
        resolve(prefixedBase64Image);
      };
      reader.onerror = error => reject(error);
    });
  }
  
  getFileExtension(fileName: string): string {
    return fileName.split('.').pop()?.toLowerCase() || '';
  }
  onFileSelected(event: any) {
    if (event.target.files) {
      const files: FileList = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file: File = files[i];
        this.fileToBase64(file).then(base64Image => {
          // Ajouter l'image base64 à votre tableau this.product.images
          this.product.images.push(base64Image);
        }).catch(error => {
          console.error('Erreur lors de la conversion du fichier en base64:', error);
        });
      }
    }
  }
}
