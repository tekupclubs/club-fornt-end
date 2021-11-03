import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sponsor } from '../models/sponsor.modeles';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  private baseUrl = 'http://localhost:8080/api/sponsor';

  constructor(private http: HttpClient) { }

  getsponsor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createsponsor(sponsor: sponsor): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, sponsor);
  }

  updatesponsor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletesponsor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getsponsorList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

