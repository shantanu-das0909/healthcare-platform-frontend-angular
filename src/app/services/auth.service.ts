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
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc1NDY0NzQ4NiwiZXhwIjoxNzU0NjUxMDg2fQ.3UQK00omlUKkcQi15VZ0rmtAKhbsb2gQrn3bA7-VN-w';

  getPatients() {
    return this.http.get('http://localhost:8080/admin/patients', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      },
    });
  }
}
