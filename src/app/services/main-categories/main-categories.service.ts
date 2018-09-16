import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class MainCategoriesService extends DataService{
  
  constructor(http:HttpClient) { 
    super("https://localhost/prorentads/api/get-main-category",http);
  }
  
}
