import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(14);
    
  }
  public logout(){
    console.log('Déconnexion réussie.');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userRole');
    console.log('Déconnexion réussie.');
    // Ajoutez ici le code pour rediriger vers la page de connexion ou toute autre page après la déconnexion si nécessaire.
  }
}
