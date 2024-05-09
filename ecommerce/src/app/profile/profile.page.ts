import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { AuthService } from '../client/services/auth.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
// import { VendeurAttenteService } from '../client/services/vendeur-attente.service';
// import { VendeurAttente } from '../client/model/VendeurAttente';
import { VendeurService } from '../seller/vendeur.service';
import {ClientService} from '../client/services/client.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userId: string='';
  userRole:string | null='';
  user:any;
  @ViewChild(IonModal) modal?: IonModal;
  name: string='';

  vendeurDetails: any = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
  };
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public authService : AuthService , public vendeurService : VendeurService , public clientService : ClientService) { }

  ngOnInit() {
    this.userId = this.authService.getUserId();
    console.log('userid : ',this.userId)
    this.userRole=this.authService.getRole();
    console.log(this.userRole);
    if (this.userRole==="new-seller" ||this.userRole==="seller"){
this.getVendeur()

    }
    else{
this.getClient()
    }
  }
    
  
 

  getVendeur(){
    this.vendeurService.getVendeurById(this.userId).subscribe(
      (response) => {
        this.user = response; // Stockez les informations de l'utilisateur dans la variable 'user'
        console.log('Informations de l\'utilisateur :', this.user);
      },
      (error) => {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
      }
    );
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

  cancel() {
    if (this.modal) {
      this.modal.dismiss(null, 'cancel');
    }
  }
  
  confirm() {
    if (this.modal) {
      this.modal.dismiss(this.name, 'confirm');
      if(this.userRole==='client'){
          this.updateClient(this.userId);
          this.getClient()
      }
      else{
        this.updateVendeur(this.userId);
        this.getVendeur()
      }
     
      console.log(this.vendeurDetails);
      
    }
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {

      // this.message = `Hello, ${ev.detail.data}!`;
    }
  }


  updateVendeur(id: string): void {
    this.vendeurService.updateVendeur(id, this.vendeurDetails)
      .subscribe(updatedVendeur => {
        console.log('Vendeur mis à jour :', updatedVendeur);
      }, error => {
        console.error('Erreur lors de la mise à jour du vendeur :', error);
      });
  }
  updateClient(id: string): void {
    this.clientService.updateClient(id, this.vendeurDetails)
      .subscribe(updatedVendeur => {
        console.log('Vendeur mis à jour :', updatedVendeur);
      }, error => {
        console.error('Erreur lors de la mise à jour du vendeur :', error);
      });
  }
}
