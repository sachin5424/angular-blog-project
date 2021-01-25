import { Component, OnInit } from '@angular/core';
import {UpdateService} from './update.service'
import {Update} from './update';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';
import { switchMap} from 'rxjs/operators';
import {from,throwError,Observable} from 'rxjs'
import {catchError,map} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  form_temp:boolean=true
  update_form=false
  model= new Update();
  id:any
  data:any;
  a:any
  b:string='';
  constructor(private service:UpdateService,private http:HttpClient,private router:ActivatedRoute,private routing:Router) {
    
   }

  ngOnInit(): void {
   this.id= this.router.snapshot.paramMap.get('id')
   console.log(this.service.get_value(this.id).subscribe((data:any)=>{
     this.data=data
     this.model.title=data.title
     this.a=data._id
   }));
   console.log(this.router.snapshot.params.id);
   console.log(this.id);
   this.update_form=false
   
  }
  onSubmit(jj:any){

     this.http.put('http://localhost:3002/categories/'+this.id,this.model).subscribe()
     this.update_form=true
      console.log(
        'jk'
      );
      
      console.log(
       this.id
      );
         
  }
  clickEventHandler(){
    this.service.dlt_value(this.id).subscribe()
    this.routing.navigate(['/admin-panel/categories/'])
    
  }
}
