import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DashService {
url='http://localhost:3000/inventory';
  constructor(private http:HttpClient) { }
  getlist(){
    
    return this.http.get(this.url)
  }

  savelist(data: any){
    console.warn(data);
    
    return this.http.post(this.url,data)
  }
delete(name:any){
  return this.http.delete(`${this.url}/${name}`)
}

}
