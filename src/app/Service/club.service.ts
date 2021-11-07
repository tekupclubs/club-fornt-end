import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Club } from '../models/club.models';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private baseUrl = 'http://localhost:8080/api/club';

  constructor(private http: HttpClient) {} 
    getclub(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
  
    createclub(club: Club): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, club);
    }
  
    updateclub(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value);
    }
  
    deleteclub(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
  
  
  }

