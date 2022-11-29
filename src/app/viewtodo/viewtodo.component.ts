import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewtodo',
  templateUrl: './viewtodo.component.html',
  styleUrls: ['./viewtodo.component.css']
})
export class ViewtodoComponent {
  constructor(private api:ApiService){
    api.fetchToapps().subscribe((response)=>{this.data=response;})
  }
  data:any=[]

  

  }
