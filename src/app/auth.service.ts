import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(private http: HttpClient) {
    const cu = localStorage.getItem('currentUser');
    this.currentUserSubject = cu !== null ?new BehaviorSubject<any>(JSON.parse(cu)): new BehaviorSubject<any>("");
    this.currentUser = this.currentUserSubject.asObservable();
  }
   
  signUp(firstname: string, surname: string, email:string, password: string) {
    return this.http.post<any>(`http://localhost:3000/auth/login`, {firstname, surname, email, password })
    .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
        }

        return user;
    }));
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}
}
