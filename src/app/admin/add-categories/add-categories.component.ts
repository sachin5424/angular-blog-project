import { Component, OnInit } from '@angular/core';
import {CategorieService} from './categorie.service'
import {Categorie} from './categorie'
import { FormGroup ,FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {
  model= new Categorie();
  temp:string;
  msg:string='';
  error_msg:string='';
  form_temp:boolean;
  error:any
  messsage:string |undefined

  constructor(private catService:CategorieService) {
    this.temp='';
    this.form_temp=false
   }

  ngOnInit(): void {
  }
  categoriesForm= new FormGroup({
    title:new FormControl('',Validators.required)
  })
  onSubmit(){
    this.catService.categories(this.categoriesForm.value).subscribe((data)=>{
      this.form_temp =true
      this.messsage = data.messsage    
    },
    (error)=>{
  
      if(error.status == 400){
        this.form_temp=true
        this.messsage =error.error.messsage
        
      }
    
      
    })}
}
