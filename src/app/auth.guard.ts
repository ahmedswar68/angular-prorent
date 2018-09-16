import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIN()) return true;
    

    let url: any;
    url = this.router.url;

      var res = url.split("/");      
     
    this.router.navigate(['/en/login'], {
      queryParams: { returnUrl: state.url }
    });
    return false;

  }
}
