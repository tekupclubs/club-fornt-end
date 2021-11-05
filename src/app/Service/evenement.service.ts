
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { evenement } from '../models/evenement.modeles';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  [x: string]: any;
  private baseUrl = 'http://localhost:8080/api/evenement';

  constructor(private http: HttpClient) { }

  getevenement(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createevenement(evenement: evenement): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, evenement);
  }

  updatesevenement(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteevenement(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getevenementList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
