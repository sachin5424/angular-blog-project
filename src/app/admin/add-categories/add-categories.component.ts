import { Component, OnInit } from '@angular/core';
import {CategorieService} from './categorie.service'
import {Categorie} from './categorie'

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

  constructor(private catService:CategorieService) {
    this.temp='';
    this.form_temp=false
   }

  ngOnInit(): void {
  }
  onSubmit(data:String){
    
   if (this.model.title=="") {
      this.temp='Title is required';
   }
   else{
    this.temp=this.model.title
    this.catService.categories(this.model).subscribe(
      res=>this.msg='successful save',
      err=>this.error_msg="something wrong",
      
    );
    this.temp='';
    this.model.title=''
    this.form_temp=true
   }
    
  }
}
