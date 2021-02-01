import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Contact} from './contact'
import {ContactService} from './contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model=new Contact();
  form_temp:boolean=false
  submitted:any;
  registerForm= new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    phone:new FormControl(),
    msg:new FormControl(),
  })
  constructor( private service:ContactService,private form:FormBuilder) { }

  ngOnInit(): void {
    console.log('ok');
    
    this.registerForm = this.form.group({
      name:['',Validators.required,Validators.minLength(3),Validators.requiredTrue],
      email:['',Validators.required,Validators.email],
      phone:['',Validators.required],
      msg:['',Validators.required],
    })
  }
  get f(){
    return this.registerForm.controls;
  }
  submitMethod(){
   if(this.registerForm.invalid){
     return console.log(this.registerForm.invalid);
     
   }
    console.log(this.registerForm.value);
    this.service.contect_data(this.registerForm.value).subscribe()
    this.registerForm.reset()
    
    // this.model.name='';
    // this.model.email='';    
    // this.model.msg='';  
    this.form_temp=true  
  }
}
