import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VendeurAttente } from '../client/model/VendeurAttente';
@Injectable({
  providedIn: 'root'
})
export class VendeurService {
  private apiUrl = 'http://localhost:8082/api'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) {}

  getAllVendeurs(): Observable<VendeurAttente[]> {
    return this.http.get<VendeurAttente[]>(`${this.apiUrl}/vendeurs`);
  }

  createVendeur(vendeur: VendeurAttente): Observable<VendeurAttente> {
    return this.http.post<VendeurAttente>(`${this.apiUrl}/vendeurs`, vendeur);
  }

  getVendeurById(id: string): Observable<VendeurAttente> {
    return this.http.get<VendeurAttente>(`${this.apiUrl}/vendeurs/${id}`);
  }

  updateVendeur(id: string, vendeurDetails: VendeurAttente): Observable<VendeurAttente> {
    return this.http.put<VendeurAttente>(`${this.apiUrl}/vendeurs/${id}`, vendeurDetails);
  }

  deleteVendeur(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/vendeurs/${id}`);
  }
}
