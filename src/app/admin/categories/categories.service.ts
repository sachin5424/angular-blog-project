import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
  url:string="http://localhost:3002/categories/"
  constructor( private http:HttpClient) { 
    
    
  }
  
  get_categories(){
   return this.http.get(this.url+'list')
  }

}
