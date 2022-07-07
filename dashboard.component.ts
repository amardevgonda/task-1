import { Component, OnInit } from '@angular/core';
import {DashService} from '../dash.service'
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private list:DashService) { }
 addList= new FormGroup({
   name: new FormControl(''),
   sku: new FormControl(''),
   description: new FormControl(''),
   price: new FormControl(''),
   stock:new FormControl('')
 })

  collection:any=[];
  ngOnInit(): void {
    this.list.getlist().subscribe((result)=>{
      console.warn(result);
      this.collection=result;
    })
  }

  collectList(){
    this.list.savelist(this.addList.value).subscribe((result)=>{
      console.warn(result);
      
    })
  }

  deleteList(item:any){
  this.list.delete(item-1).subscribe((result)=>{
 console.warn(result);
 
  })
  }
}
