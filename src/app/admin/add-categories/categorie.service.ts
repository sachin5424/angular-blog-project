import { Injectable } from '@angular/core';
import {HttpBackend,HttpClient,HttpHandler,HttpHeaders,HttpErrorResponse} from '@angular/common/http'
import {Categorie} from './categorie'
import {from,throwError,Observable} from 'rxjs'
import {catchError,map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  error:any={};
  url:any="http://localhost:3002/categories";
  httOption={
    headers:new HttpHeaders(
      {'contect-Type':'applicaton/json'}
      )

  };

  constructor(private http:HttpClient,private handler:HttpBackend) {
    this.http = new HttpClient(handler)
   }
   categories(formdata:Categorie):Observable<any>{
     return this.http.post(this.url,formdata,this.httOption)
   }
}
