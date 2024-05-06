import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:8082/api/clients'; // Changez l'URL selon votre configuration
  picture: any;

  constructor(private http: HttpClient) { }

  getClient(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }
  getClienttById(id: string): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }
  supprimerClient(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  creerClient(nouveauClient: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, nouveauClient);
  }
}
