import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fournisseur } from '../models/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private baseUrl = 'http://localhost:8080/api/fournisseur';

  constructor(private http: HttpClient) { }

  getfournisseur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createfournisseur(fournisseur: fournisseur): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, fournisseur);
  }
  updatefournisseur(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deletefournisseur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getfournisseurList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
