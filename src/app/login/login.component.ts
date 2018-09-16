import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '../services/translate/translate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUserData = {};
  currentLanguage: string;
  constructor(
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translateService: TranslateService) {
    this.currentLanguage = this.translateService.getLanguage();
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          let returnUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl');
          localStorage.setItem('token', res.result);
          // console.log("----"+this.currentLanguage);
          this.router.navigate([returnUrl || '/' + this.currentLanguage + '/myProfile']);
        },
        err => console.log(err)
      )
  }
}
