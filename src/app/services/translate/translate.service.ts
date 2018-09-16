import { Injectable } from '@angular/core';
import { TRANSLATIONSAr } from './translations.ar';
import { TRANSLATIONSEn } from './translations.en';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class TranslateService {

  public currentLanguage = 'en';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  translate(str) {
    if (this.currentLanguage == 'en') {
      return TRANSLATIONSEn[str];
    } else {
      return TRANSLATIONSAr[str];
    }
  }

  selectLanguage(language) {
    this.currentLanguage = language;
  }

  getLanguage() {
    let url: any;
    url = this.router.url;
    if (url != '/') {
      var res = url.split("/");
      this.selectLanguage(res[1]);
      return this.currentLanguage;
    }
  }

}