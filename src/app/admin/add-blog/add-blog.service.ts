import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddBlogService {
  url:string="http://localhost:3002/blog/"
  constructor(private http:HttpClient) { }


BlogPost(data:any){
  return this.http.post(this.url+'add',data)
}
}
