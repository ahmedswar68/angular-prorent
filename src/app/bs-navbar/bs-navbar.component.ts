import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { TranslateService } from "../services/translate/translate.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  currentLanguage: string;
  link: Array<string> = [];
  constructor(private translateService: TranslateService, private router: Router, private authService: AuthService) {
    // console.log(this.auth);

  }
  getLanguage() {
    this.currentLanguage = this.translateService.getLanguage();
    return this.currentLanguage;
  }

  toggleLanguage(lang) {
    this.currentLanguage = lang;
    if (lang == 'ar') {
      this.link = [this.router.url.replace("en", "ar")];
    } else {
      this.link = [this.router.url.replace("ar", "en")];
    }

    this.router.navigate(this.link);
    return this.translateService.selectLanguage(lang);
  }

}
