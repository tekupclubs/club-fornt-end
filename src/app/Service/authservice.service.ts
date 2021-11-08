import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { user } from '../models/user.modeles';

const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  private baseUrl = 'http://localhost:8080/auth/';

  constructor(private http: HttpClient,  private router: Router) { }

  signup(user: user): Observable<any>{
    //console.log('In AuthService');
    return this.http.post(this.baseUrl + 'signup', user, { headers, responseType: 'text'})
                    .pipe(catchError(this.handleError));
  }
  login(user: string, password: string){
    // console.log('In AuthService -  login');
    return this.http.post<any>(this.baseUrl + 'login',
      {userName: user, password:password}, {headers})
      .pipe(catchError(this.handleError),
        map(userData => {
          sessionStorage.setItem("username", user);
          let tokenStr = "Bearer " + userData.token;
          console.log("Token---  " + tokenStr);
          sessionStorage.setItem("token", tokenStr);
          sessionStorage.setItem("roles", JSON.stringify(userData.roles));
          sessionStorage.setItem("userid",JSON.stringify(userData.id))
          return userData;
        })
      );
  }

  logout(){
    sessionStorage.clear()
    this.router.navigate(['/singin']);
  }

  isLoggedIn(): boolean{
    return sessionStorage.getItem('username') !== null;
  }

  private handleError(httpError: HttpErrorResponse) {
    let message:string = '';

    if (httpError.error instanceof ProgressEvent) {
      console.log('in progrss event')
      message = "Network error";
    }
    else {
      message = httpError.error.message;
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(message);














  }
}
