import { Component, OnInit } from '@angular/core';
import {DemoService} from './demo.service'
import {HttpBackend,HttpClient,HttpHandler,HttpHeaders,HttpErrorResponse,HttpEventType} from '@angular/common/http'


import {Demo} from './demo'
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  model=new Demo();
  selectedFile:any;
  file:any=null;
  temp:any[]=[];
  url:string='http://localhost:4002/'
  shortLink: string = ""; 
  loading: boolean = false;
  img:string ="assets/images/img6.jpg"
  constructor(private ser:DemoService,private http:HttpClient) {
    
   }

  ngOnInit(): void {
   this.http.get(this.url).subscribe(
     (data:any)=>{
       this.temp=data
     }
   )
  }
  
  onChange(event:any) {
      // if (event.target.files && event.target.files[0]) {
      //   var reader = new FileReader();
      
      //   reader.onload = (event:any) => {
      //     this.demo = event.target.result;
      //     console.log(this.demo);
          
      //   }
      
      //   reader.readAsDataURL(event.target.files[0]);

      // }
      this.file = <File>event.target.files[0]
     
      
      }
    

onUpload() {
  const fb = new FormData()

  fb.append('profile',this.file,this.file.name)
  fb.append('username',this.model.username)
  fb.append('cat',this.model.cat)
  this.model.profile=fb
  console.log(fb.get('profile'));
  
  this.http.post('http://localhost:4002/upload',fb).subscribe((r)=>{
    console.log(r);

    
  })
  
}

}
