import { HttpClient,HttpBackend,HttpHeaders,HttpHandler,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Update} from './update'
import {from,throwError,Observable} from 'rxjs'
import {catchError,map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  httOption={
    headers:new HttpHeaders(
      {'contect-Type':'applicaton/json'}
      )

  };
  constructor(private http:HttpClient,private handler:HttpBackend) {
    this.http = new HttpClient(handler)

   }
   get_value(id:any){
    return this.http.get('http://localhost:3002/categories/'+id)
   }
   update(formdata:any,id:any):Observable<any>{
    return this.http.post('http://localhost:3002/categories/'+id,formdata.title,this.httOption)
  }
   dlt_value(id:any){
    return this.http.delete('http://localhost:3002/categories/'+id)
   }

}
