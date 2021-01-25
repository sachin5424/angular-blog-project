import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {AddBlog} from './add-blog'

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  model= new AddBlog()
  file:any;
  error_temp:boolean=false
  error:string='';
  form_temp:boolean=false
  get_categories:any[]=[];
  constructor(private http:HttpClient) {
 

   }

  ngOnInit(): void {
    this.http.get('http://localhost:3002/categories-list').subscribe(
      (data:any)=>{
        this.get_categories=data;

        
      }
    )
  }
  onChange(event:any){
    console.log(event);
    this.file = <File>event.target.files[0]
    
  }
  
  submitMethod(data:any){
    if (this.model.categories == null) {
        this.error= 'requried filed ';
        console.log('ok');
        this.error_temp=true
        
       
    }
    else{
    const jqueryForm = new FormData();
    console.log(this.model);
    var h = this.model.Featured 
    jqueryForm.append('Title',this.model.Title)
    jqueryForm.append('Image',this.file,this.file.name)
    jqueryForm.append('categories',this.model.categories)
    jqueryForm.append('Description',this.model.Description)
    console.log(data);
    this.http.post('http://localhost:3002/upload',jqueryForm).subscribe((r)=>{
      console.log(r);
      
    })
    this.model.Image='';
    this.model.Title='';
    this.model.categories='';
    this.model.Active=false;
    this.model.Featured=true;
    this.model.Description='';
    this.form_temp=true
    this.error_temp=false
  }
  }
}
