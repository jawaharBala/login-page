import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private url = 'https://jsonplaceholder.typicode.com/';
  constructor(private http:HttpClient) { }
 
  get(){
   let geturl = this.url+'posts'
   console.log(geturl)
    return this.http.get(geturl)
    
  }
  post(content:string){
   return this.http.post(this.url,content.toString())
  }

  delete(content: any){

   return  this.http.delete(this.url,content)
  }
  update(todoId: any,content:any){
    let updateUrl = this.url+`posts/${todoId}`;
    
    return this.http.put(updateUrl,JSON.stringify(content));
  }



}
