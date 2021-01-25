import { Component, OnInit } from '@angular/core';
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
  constructor( private service:ContactService) { }

  ngOnInit(): void {
  }
  submitMethod(){
    this.service.contect_data(this.model).subscribe()
    this.model.name='';
    this.model.email='';    
    this.model.msg='';  
    this.form_temp=true  
  }
}
