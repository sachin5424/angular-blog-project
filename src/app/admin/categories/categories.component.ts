
import { Component, OnInit } from '@angular/core';
import {CategoriesService} from './categories.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  data:any[]=[];
  constructor( private service:CategoriesService ) { }

  ngOnInit(): void {
    this.service.get_categories().subscribe((data:any)=>{
      console.log(data);
      this.data=data;
      
    })
    
  }

}
