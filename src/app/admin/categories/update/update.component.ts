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
  error:string |undefined
  value:string|undefined
  
  constructor(private service:UpdateService,private http:HttpClient,private router:ActivatedRoute,private routing:Router) {
    
   }

  ngOnInit(): void {
   this.id= this.router.snapshot.paramMap.get('id')
   console.log(this.id);
   
  //  this.service.update_value(this.id).subscribe((data=>{
  //    console.log(data);
     
  //  }),
  //  err=>{
  //    console.log('ok');
     
  //    console.log(err.status);
     
  //  }
  //  )
 
  
   this.update_form=false
   
  }
  
  onSubmit(jj:any){
    //  this.service.update_value(this.id).subscribe(data=>console.log(data)
    //  )
     console.log(jj);
     
 
}
delt(){
  this.service.dlt_value(this.id).subscribe();
  this.routing.navigate(['/admin-panel/categories/'])
  console.log(this.id);
  
}
}
