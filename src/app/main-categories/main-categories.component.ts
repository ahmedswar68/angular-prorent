import { Component, OnInit } from '@angular/core';
import { MainCategoriesService } from './../services/main-categories/main-categories.service';
import { TranslateService } from "../services/translate/translate.service";

@Component({
  selector: 'main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css']
})
export class MainCategoriesComponent implements OnInit {

  mainCategories = [];
  currentLanguage: string;

  constructor(private translateService: TranslateService, private mcService: MainCategoriesService) {
    this.fetchMainCategories();
  }

  ngOnInit() {
    this.currentLanguage = this.translateService.getLanguage();
  }
  fetchMainCategories() {
    this.mcService.getAll()
      .subscribe(
        res => this.mainCategories = res.data,
        err => console.log(err)
      )
  }
}
