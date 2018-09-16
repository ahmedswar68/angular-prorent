import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategoriesService } from './../services/sub-categories/sub-categories.service';
import { TranslateService } from "../services/translate/translate.service";

@Component({
  selector: 'sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {
  subCategories=[];
  currentLanguage:string;
  category_id;
  constructor(private translateService: TranslateService, 
    private route:ActivatedRoute,private scService:SubCategoriesService) {
      route.queryParamMap.subscribe(params=>{
         this.category_id= params.get('category');
         console.log(this.category_id);
         
      });    
  }
  ngOnInit() {
    // this.id= this.route.snapshot.paramMap.get('id');//if the user will go away from the page and then go back to it
    this.fetchSubCategories();  
    this.currentLanguage = this.translateService.getLanguage();
    // console.log(this.currentLanguage);
    /** 
    //we use this code if the component will have next and prev btns so we should keep the component in the dom and don't destroy it
    this.route.paramMap
    .subscribe(params=>{
      let id=+params.get('id');
    });
    */
  }
  
  fetchSubCategories(){
    this.scService.fetchSubCategories()
    .subscribe(
      res=>this.subCategories=res.data,
      err=>console.log(err)            
    )
  }
  

}
