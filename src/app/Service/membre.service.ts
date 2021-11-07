import { user } from './../models/user.modeles';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MembreService {
  private baseUrl = 'http://localhost:8080/api/user';

  constructor( private http:HttpClient) { }
  getuser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createsuser(user:user): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateuser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteuser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getuserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getByUserRole():  Observable<any>{
    return this.http.get(this.baseUrl+'displayuser', {responseType:'text'})
                    .pipe(catchError(this.handleError));
  }
  getByAdminRole():  Observable<any>{
    return this.http.get(this.baseUrl+'displayadmin', {responseType:'text'})
                    .pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {
    let message:string = '';
    if (httpError.error instanceof ProgressEvent) {
      console.log('in progrss event')
      message = "Network error";
    }
    else {
      message = JSON.parse(httpError.error).message;
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later. Error Message- ' + message);
  }


















}
