import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {DashboardService} from './dashboard.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data:any;
  url:string="http://localhost:3002/"
  all_categories:any
  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.BlogList().subscribe(data=>this.data=data
    
    )
    this.dashboardService.CategoriesFindByPost().subscribe(data=>this.all_categories=data)
  } 
  getCat= new FormGroup({
    cat:new FormControl('')
  })

  kkk(){
    console.log('ok');
    
  }
  clickEventHandler(event:any){

    if(this.getCat.value.cat == ""){
      this.ngOnInit()
      return
    }
    console.log('no');
    
    console.log(this.getCat.value);
    this.dashboardService.findPostById(this.getCat.value.cat).subscribe(data=>this.data=data
    )
    console.log(this.getCat.value.cat);
    

    
  }
}
