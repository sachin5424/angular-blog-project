import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url:string="http://localhost:3002/blog/"
  cat_url:string="http://localhost:3002/categories/list"
  // http://localhost:3002/blog/categroies/
  constructor(private http:HttpClient) { }
  BlogList(){
    return this.http.get(this.url+'list')
  }
  BlogDetails(id:any){
    return this.http.get(this.url+'details/'+id)
  }
  CategoriesFindByPost(){
    return this.http.get(this.cat_url)
  }
  findPostById(id:any){
    return this.http.get(this.url+'categroies/'+id)
  }
}

// this.http.get('http://localhost:3002/categories/list').subscribe(
//   (data:any)=>{
//     this.get_categories=data;

    
//   }
// )