import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { VendeurAttenteService } from '../services/vendeur-attente.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: string = '';
  address: string = '';
  gender: string = ''; // Assuming gender selection is required
  dateOfBirth: string = '';
  role: string='';
  constructor(private authService: AuthService,private router: Router, private clientService:ClientService, private vendeurAttenteService: VendeurAttenteService) { }
  

  ngOnInit() {
  }
  onSubmit() {
  
    const formData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      password: this.password,
      address: this.address,
      gender: this.gender,
      dateOfBirth: this.dateOfBirth, 
      role: this.role
    };
  
    // Utilisez formData pour envoyer les données à votre service ou pour effectuer toute autre opération requise.
    console.log(formData);
    this.authService.signUp( formData)
    .subscribe(response => {
      console.log(formData)
      console.log(response);
      if (response.ourUsers) {
        localStorage.setItem('userId', response.ourUsers.id);
        localStorage.setItem('userRole', response.ourUsers.role);
       
        if (localStorage.getItem('userRole') === 'new-seller') {
          // Ajouter les coordonnées dans la table professeur-attente ici
          this.addVendeurAttente(response.ourUsers);
        }
        if (localStorage.getItem('userRole') === 'client') {
          // Ajouter les coordonnées dans la table professeur-attente ici
          this.addClient(response.ourUsers);
        }
      }
      localStorage.setItem('token', response.token);
      localStorage.setItem('refreshToken', response.refreshToken);
      console.log(localStorage);
      
    },
    error => {
      // Gérer les erreurs d'inscription
      console.error('Erreur lors de l\'inscription :', error);
    });
  }
 
  addClient(user: any) {
    this.clientService.creerClient(user)
      .subscribe(
        response => {
          console.log('Les informations de l\'utilisateur ont été ajoutées avec succès à la table professeur-attente:', response);
        },
        error => {
          console.error('Erreur lors de l\'ajout des informations de l\'utilisateur à la table professeur-attente:', error);
        }
      );
  }

  addVendeurAttente(user: any) {
    this.vendeurAttenteService.creerVendeurAttente(user)
      .subscribe(
        response => {
          console.log('Les informations de l\'utilisateur ont été ajoutées avec succès à la table professeur-attente:', response);
        },
        error => {
          console.error('Erreur lors de l\'ajout des informations de l\'utilisateur à la table professeur-attente:', error);
        }
      );
  }

  
}
