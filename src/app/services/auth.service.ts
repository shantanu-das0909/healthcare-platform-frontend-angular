import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from '../models/Signup.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // signup(userData: Signup) {
  //   return this.http.post('localhost:8080/admin/patients', userData);
  // }

  token: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc1NDU3NzMxNiwiZXhwIjoxNzU0NTgwOTE2fQ.gAMdh9f6kxWa0shnHqlXGIxGYMAVmZcN1mLp246xG7o';

  getPatients() {
    return this.http.get('http://localhost:8080/admin/patients', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      },
    });
  }
}
