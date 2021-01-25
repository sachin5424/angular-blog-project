import { Injectable } from '@angular/core';
import {from,throwError,Observable} from 'rxjs'
import {catchError,map} from 'rxjs/operators'

import {HttpBackend,HttpClient,HttpHandler,HttpHeaders} from '@angular/common/http'
import {Demo} from './demo'
@Injectable({
  providedIn: 'root'
})
export class DemoService {
   url:string='http://localhost:4002/upload';
   httOption={
    headers:new HttpHeaders(
      {'contect-Type':'applicaton/json'}
      )

  };

  
  constructor(private http:HttpClient,private handler:HttpBackend) {
    this.http = new HttpClient(handler)
   }
  
   upload(form:Demo){
     this.http.post(this.url,form).subscribe()
   }
 
}
