import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContectService {
  url:string='http://localhost:3002/contact/';
  constructor(private http:HttpClient) {

   }
   get_contect_data(){
     return this.http.get(this.url+'list')
   }
  contect_delete(id:any){
        return this.http.delete(this.url+'delete/'+id).subscribe()
   }
}
