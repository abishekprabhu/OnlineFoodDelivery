import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:9090/api/admins'; // Your Spring Boot API URL

  constructor(private http: HttpClient) {}

  registerAdmin(adminData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, adminData);
  }

  loginAdmin(adminData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, adminData);
  }
}
