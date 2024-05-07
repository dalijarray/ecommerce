import { Component, OnInit } from '@angular/core';
import { VendeurAttenteService } from 'src/app/client/services/vendeur-attente.service';
import { VendeurService } from 'src/app/seller/vendeur.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { VendeurAttente } from '../../client/model/VendeurAttente';
@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.page.html',
  styleUrls: ['./adminprofile.page.scss'],
})
export class AdminprofilePage implements OnInit {

  constructor(private vendeurAttenteService:VendeurAttenteService,private vendeurService: VendeurService) { }
allVendeurs: any;
allvendeurAttend:any;
 
  ngOnInit() {
    this.getVendeurs();
    this.getAllVendeurs();
    // for (let i = 1; i < 5; i++) {
    //   this.allVendeurs.push(`Item ${i}`);
    // }
    
  }
  getVendeurs() {
    // Appel de la méthode du service pour récupérer les vendeurs en attente
    this.vendeurAttenteService.getVendeursAttente().subscribe(
      (vendeurs) => {
        this.allvendeurAttend = vendeurs;
        console.log(this.allvendeurAttend)
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des vendeurs :', error);
      }
    );
  }
  supprimerVendeurAttente(id: string) {
    // Appel de la méthode du service pour supprimer le vendeur en attente
    this.vendeurAttenteService.supprimerVendeurAttente(id).subscribe(
      () => {
        console.log('Vendeur supprimé avec succès');
        this.getVendeurs();
        // Ajoutez ici le code pour mettre à jour l'affichage ou la liste des vendeurs après suppression si nécessaire
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la suppression du vendeur :', error);
      }
    );
  }
  createVendeur(nouveauVendeur:VendeurAttente) {
    this.vendeurService.createVendeur(nouveauVendeur).subscribe(
      (newVendeur) => {
        console.log('Nouveau vendeur créé:', newVendeur);
        this.getAllVendeurs();
        this.supprimerVendeurAttente(nouveauVendeur.id);
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la création du vendeur:', error);
      }
    );
  }
  getAllVendeurs(): void {
    // Utilisation de la méthode du service pour récupérer tous les vendeurs
    this.vendeurService.getAllVendeurs().subscribe(
      (vendeurs) => {
        this.allVendeurs = vendeurs;
        console.log(this.allVendeurs)
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des vendeurs :', error);
      }
    );;
  }
  supprimerVendeur(id: string) {
    // Appel de la méthode du service pour supprimer le vendeur en attente
    this.vendeurService.deleteVendeur(id).subscribe(
      () => {
        console.log('Vendeur supprimé avec succès');
        this.getAllVendeurs();
        // Ajoutez ici le code pour mettre à jour l'affichage ou la liste des vendeurs après suppression si nécessaire
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la suppression du vendeur :', error);
      }
    );
    }
}
