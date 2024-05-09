import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/client/services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  isSettingsActive: boolean = true;
  constructor(private authService: AuthService) { }

  ngOnInit() {

    console.log(12)
    
  }
  public logout(){
    console.log('Déconnexion réussie.');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('refreshToken');
    console.log('Déconnexion réussie.');
    // Ajoutez ici le code pour rediriger vers la page de connexion ou toute autre page après la déconnexion si nécessaire.
  }

  abc(){
    console.log(13)
  }

}
