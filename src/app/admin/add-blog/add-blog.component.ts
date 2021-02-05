import { HttpClient } from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AddBlog} from './add-blog'
import {AddBlogService} from './add-blog.service'

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
  meassage:string |undefined
  constructor(private http:HttpClient,private addBlogService:AddBlogService) {
 

   }

  ngOnInit(): void {
    this.http.get('http://localhost:3002/categories/list').subscribe(
      (data:any)=>{
        this.get_categories=data;

        
      }
    )
  }


  BlogForm=new FormGroup({
    title:new FormControl(''),
    Image: new FormControl(''),
    categories:new FormControl(''),
    Description:new FormControl(''),
    Active:new FormControl(''),
    Featured:new FormControl('')
  })

  onChange(event:any){
    console.log(event);
    this.file = <File>event.target.files[0]
    
  }
  
  submitMethod(){
    console.log(this.BlogForm.value);
    console.log(this.BlogForm.value.Image = this.file.name);
    const jqueryForm = new FormData();
      jqueryForm.append('title',this.BlogForm.value.title)
      jqueryForm.append('Image',this.file,this.file.name)
      jqueryForm.append('categories',this.BlogForm.value.categories)
      jqueryForm.append('Description',this.BlogForm.value.Description)
      jqueryForm.append('Active',this.BlogForm.value.Active)
      jqueryForm.append('Featured',this.BlogForm.value.Featured)
      console.log(jqueryForm);
      this.addBlogService.BlogPost(jqueryForm).subscribe((data:any)=>{
        console.log(data);
        this.form_temp=true
        this.meassage = data.messsage
        console.log(data.messsage);
        this.BlogForm.reset()
        
      },
      (error)=>{
        console.log(error);
        if (error.status == 400) {
           this.form_temp=true
           this.meassage= error.error.messsage
           return
        }
        
      }
    
    )
    // if (this.model.categories == null) {
    //     this.error= 'requried filed ';
    //     console.log('ok');
    //     this.error_temp=true
        
       
    // }
  //   else{
  //   const jqueryForm = new FormData();
  //   console.log(this.model);
  //   var h = this.model.Featured 
  //   jqueryForm.append('Title',this.model.Title)
  //   jqueryForm.append('Image',this.file,this.file.name)
  //   jqueryForm.append('categories',this.model.categories)
  //   jqueryForm.append('Description',this.model.Description)
  //   console.log(data);
  //   this.http.post('http://localhost:3002/upload',jqueryForm).subscribe((r)=>{
  //     console.log(r);
      
  //   })
  //   this.model.Image='';
  //   this.model.Title='';
  //   this.model.categories='';
  //   this.model.Active=false;
  //   this.model.Featured=true;
  //   this.model.Description='';
  //   this.form_temp=true
  //   this.error_temp=false
  // }
  }
}
