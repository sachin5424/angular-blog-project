import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service'
import { ActivatedRoute,ParamMap} from '@angular/router'
@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.css']
})
export class DashboardDetailsComponent implements OnInit {
  id:any
  data:any;
  constructor(private DashboardService:DashboardService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
     this.id= this.ActivatedRoute.snapshot.paramMap.get('id')
    this.DashboardService.BlogDetails(this.id).subscribe(data=>this.data =data
    )
  }

}
