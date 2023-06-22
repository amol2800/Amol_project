import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private message=new BehaviorSubject ('this is defalt message of currentmessage');
  currentMessage=this.message.asObservable()

  constructor() {
    // this.currentMessage.subscribe((res:any)=>console.log(res) )
      
   }

   setdata(dt:any){
    this.message.next(dt)

   }

   getdata(){
    return this.currentMessage;
   }
   
}
