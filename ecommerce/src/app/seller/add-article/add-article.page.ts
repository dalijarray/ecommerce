import { Component, EventEmitter } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Product } from 'src/app/models/product.model';

import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.page.html',
  styleUrls: ['./add-article.page.scss'],
})
export class AddArticlePage {
  product: Product = new Product();

  constructor(private productService: ProductServiceService, private alertController: AlertController, private router: Router,private navCtrl: NavController) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Succès',
      subHeader: 'Produit ajouté avec succès!',
      message: '',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Fermer l'alerte
            alert.dismiss().then(() => {
              // Naviguer vers la page "home-seller"
              this.router.navigate(['/home-seller']);
            });
            return false; // Retourne false pour éviter la fermeture automatique de l'alerte
          }
        }
      ]
    });

    await alert.present();
  }
  goBack() {
    this.navCtrl.back();
  }
  ajouterProduit() {
    console.log('Données du produit à ajouter :', this.product);
    this.productService.createProduct(this.product).subscribe({
      next: (response) => {
        console.log('Produit ajouté avec succès:', response);
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'ajout réussi
       },
      error: (error) => {
        console.error('Erreur lors de l\'ajout du produit:', error);
        // Gérer l'erreur, par exemple afficher un message à l'utilisateur
      }
    });
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
