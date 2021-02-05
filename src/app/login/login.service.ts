import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  login_url:string ="http://localhost:3002/user/login";
  constructor(private http:HttpClient) { }

  login(data:any):Observable<any>{
    return this.http.post(this.login_url,data)
  }
  // errorHandler(error:HttpErrorResponse){
  //   return  }
  
}
