import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from '../models/signup.model';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { constants } from '../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  login(loginCredentials: {
    username: String;
    password: String;
  }): Observable<User> {
    return this.http
      .post<User>(constants.USER_AUTH_URL + '/login', loginCredentials)
      .pipe(
        catchError(this.handleError),
        tap((response) => {
          this.storeUser(response);
          this.user.next(response);
        })
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.error.message));
  }
  private storeUser(user: User) {
    localStorage.setItem('authData', JSON.stringify(user));
  }
  private removeUser(user: User) {
    localStorage.removeItem('authData');
  }
}
