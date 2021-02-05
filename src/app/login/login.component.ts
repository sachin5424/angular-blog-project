import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map  } from 'rxjs/operators';
import {Observable} from 'rxjs'
import {LoginService} from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:any
  error_temp:boolean=false
  token:any
  static:number | undefined
  login_url:string ="http://localhost:3002/user/login";
  constructor(private loginService:LoginService,private http:HttpClient
    ) { }
   loginForm = new FormGroup({
     email:new FormControl('',Validators.required),
     password:new FormControl('',Validators.required)
   })
  ngOnInit(): void {
   const demo =  sessionStorage.removeItem('token')
    console.log(demo);
    
  }
  onSubmit(){
   this.loginService.login(this.loginForm.value).subscribe(
     data =>{
         this.token =data.token
         console.log(this.token);
         
         
     },
     error=> {
       console.log(error.status);
       if (error.status == 400) {
         this.error_temp = true
         return this.error= error.error.massage
       }
       if (error.status == 200) {
         sessionStorage.setItem('token',this.token)
      }
     }
     
   )

  }

  
}
