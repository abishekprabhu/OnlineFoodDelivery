import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from './user.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  
	constructor(private http: HttpClient) { }

	createOrder(order: any): Observable<any> {
	  return this.http.post("http://localhost:9090/createOrder", order, httpOptions)
		.pipe(
		  catchError(this.handleError)
		);
	}
  
	private handleError(error: HttpErrorResponse) {
	  console.error('Error creating order:', error);
	  return throwError('An error occurred while creating the order. Please try again later.');
	}
	

  registerUser(user: User): Observable<User> {
    return this.http.post<User>("http://localhost:9090/register", user);
  }

  loginUser(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post("http://localhost:9090/login", body, { responseType: 'text' });
  }
  
  updatePassword(username: string, newPassword: string) : Observable<any>{
	console.log('Updating password:', username, newPassword);
	return this.http.put<any>(`http://localhost:9090/api/users/${username}/updatePassword`, { newPassword });
  }
  
  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`http://localhost:9090/users/${username}`);
  }

  updateUserDetails(user: User): Observable<any> {
    return this.http.put(`http://localhost:9090/users/${user.username}`, user);
  }
  }