import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  url:string="http://localhost:3002/blog/"
  data:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url+'list').subscribe((data)=>this.data=data
    )
  }

}
