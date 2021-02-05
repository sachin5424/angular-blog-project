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
  
  url:string ="http://localhost:3002/categories/"
  constructor(private http:HttpClient) {

    // this.http = new HttpClient(handler)

   }
  //  http://localhost:3002/categories/update/601ae622dfe9aa70c8bd9b3f
  //  update_value(id:any){
  //   const body = { title: 'Angular PUT Request Example' };
  //    return this.http.put('http://localhost:3002/categories/update/'+id)
  //  }

   dlt_value(id:any){
    return this.http.delete(this.url+'delete/'+id)
   }

}
