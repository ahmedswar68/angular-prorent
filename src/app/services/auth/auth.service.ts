import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateService } from '../translate/translate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "https://localhost/prorentads/api/";
  constructor(
    private http: HttpClient,
    private router: Router,
    private translateService: TranslateService) { }

  registerUser(user) {
    return this.http.post<any>(this.url + "register", user);
  }

  loginUser(user) {
    return this.http.post<any>(this.url + "login", user);
  }
  userDeatils() {
    return this.http.post<any>(this.url + "get_user_details", null);
  }
  isLoggedIN() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/' + this.translateService.getLanguage() + '/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
