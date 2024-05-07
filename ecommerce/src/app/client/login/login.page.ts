import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email :string="";
  password :string="" ;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private clientService: ClientService
  ) { }
  
  ngOnInit() {
  }

  onLogin() {
    const signInRequest = {
      email: this.email,
      password: this.password
    };
console.log(signInRequest)
    this.authService.signIn(signInRequest).subscribe(
      (response) => {
        console.log('Connexion réussie !', response);
        this.router.navigate(['/tabs']);
        const token = response.token;
        localStorage.setItem('token', token);
      },
      (error) => {
        console.error('Erreur de connexion :', error);
      }
    );
  }
}
