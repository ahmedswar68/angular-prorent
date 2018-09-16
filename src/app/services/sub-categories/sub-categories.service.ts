import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriesService {

  private url = "https://prorentads.com/api/";
  constructor(private http:HttpClient) { }
  fetchSubCategories(){
    return this.http.get<any>(this.url+"get-sub-category");
  }
}
