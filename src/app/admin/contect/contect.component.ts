import { Component, OnInit } from '@angular/core';
import {ContectService} from './contect.service'

@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css']
})
export class ContectComponent implements OnInit {
  data:any[]=[]
  constructor( private service:ContectService) { }

  ngOnInit(): void {
    this.service.get_contect_data().subscribe((data:any)=>{
   this.data=data
   console.log(data);
   
    }
    )
  }
  clickEventHandler(id:any){
    this.service.contect_delete(id)
  
    
  }

}
