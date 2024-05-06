import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VendeurAttente } from '../model/VendeurAttente';

@Injectable({
  providedIn: 'root'
})
export class VendeurAttenteService {


  private apiUrl = 'http://localhost:8082/api/vendeurs-attente'; // Changez l'URL selon votre configuration
  picture: any;

  constructor(private http: HttpClient) { }

  getVendeursAttente(): Observable<VendeurAttente[]> {
    return this.http.get<VendeurAttente[]>(this.apiUrl);
  }
  getVendeurAttenteById(id: string): Observable<VendeurAttente> {
    return this.http.get<VendeurAttente>(`${this.apiUrl}/${id}`);
  }
  supprimerVendeurAttente(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  creerVendeurAttente(nouveauVendeur: VendeurAttente): Observable<VendeurAttente> {
    return this.http.post<VendeurAttente>(this.apiUrl, nouveauVendeur);
  }


 

}
