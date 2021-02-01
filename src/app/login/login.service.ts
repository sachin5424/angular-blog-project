import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  login_url:string ="http://localhost:3002/user/login";
  constructor(private http:HttpClient) { }
  // login(data:any){
  //   return this.http.post(this.login_url,data)
  // }
}
