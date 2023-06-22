import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicService {
  public url:any='  http://localhost:8000/data'

  constructor( private api:HttpClient) {
    
   }
   get(){
    return this.api.get(this.url)
   }
}
