import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../_classes/user'
import { LoginData } from '../_classes/login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  loginData: LoginData;
  user: User;
  isloggedin:boolean=false;

  constructor(private http: HttpClient) {}

  authenticateUser(loginData: LoginData): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
    });
   
    return this.http.post("http://localhost:3000/api/auth/signin", loginData, {headers: headers});
    
  }

  storeUserData(token:any, user:any) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
    
  }

  logout() {
    this.authToken = null;
    localStorage.clear();
  }

  loadToken() {
    this.authToken = localStorage.getItem("id_token");
    
  }

  loggedIn() {
    this.loadToken()
    const helper = new JwtHelperService();
    const isNotExpired = !helper.isTokenExpired(this.authToken);
    return isNotExpired;
  }
  
}