import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReqRes } from '../model/ReqRes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8082/auth'; // Mettez l'URL de votre API Spring ici

  constructor(private http: HttpClient) { }

  signUp(signUpRequest: any): Observable<ReqRes> {
    return this.http.post<ReqRes>(`${this.baseUrl}/signup`, signUpRequest);
  }

  signIn(signInRequest: any): Observable<ReqRes> {
    return this.http.post<ReqRes>(`${this.baseUrl}/signin`, signInRequest);
  }

  refreshToken(refreshTokenRequest: any): Observable<ReqRes> {
    return this.http.post<ReqRes>(`${this.baseUrl}/refresh`, refreshTokenRequest);
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('refreshToken');
  }
  getUser(id: string){
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  updateUser(id : any, prod : any){
    return this.http.put(`${this.baseUrl}/${id}`,prod);

  }
  
  storeUserData(userData: any): void {
    localStorage.setItem('userData', JSON.stringify(userData)); // Stockez les données de l'utilisateur dans le stockage local avec la clé 'userData'
  }

  getUserRole(): string {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    return userData?.ourUsers?.role || ''; // Assurez-vous que la structure des données est correcte avant d'accéder à la propriété "role"
  }
  getRole(): string | null {
    return localStorage.getItem('role');
  }
  
}
