import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map  } from 'rxjs/operators';
import {Observable} from 'rxjs'
import {LoginService} from './login.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:any
  static:number | undefined
  login_url:string ="http://localhost:3002/user/login";
  constructor(private loginService:LoginService,private http:HttpClient
    ) { }
   loginForm = new FormGroup({
     email:new FormControl('',Validators.required),
     password:new FormControl('',Validators.required)
   })
  ngOnInit(): void {
  }
  onSubmit(){
    this.http.post(this.login_url,this.loginForm.value).subscribe((data:any)=>{
       sessionStorage.setItem('token',data.token)
    })
  }
  
  
  
}
