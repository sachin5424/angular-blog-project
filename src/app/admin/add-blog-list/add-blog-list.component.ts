import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-add-blog-list',
  templateUrl: './add-blog-list.component.html',
  styleUrls: ['./add-blog-list.component.css']
})
export class AddBlogListComponent implements OnInit {
  
  get_list_url='http://localhost:3002/';
  data:any[]=[];
  id:any 
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    
    this.http.get(this.get_list_url+'blog/'+'list').subscribe((data:any)=>{
      console.log(data);
      this.data=data
      
    })

  }
  delte(id:any){
   console.log(id);
   this.http.delete(this.get_list_url+'blog/'+'delete/'+id).subscribe()
   this.ngOnInit()
  
   
  }
 
}
