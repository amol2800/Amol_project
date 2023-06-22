import { Component } from '@angular/core';
import { ServicService } from 'src/app/class/servic.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public parentdata:any;
  public parentdata2:any;
  public childdata3:any;
  public childdata4:any;


  constructor(private api:ServicService){
    this.parentdata2='parent data'
    
   this. getdata()

  }
  getdata(){
    this.api.get().subscribe((res)=>{
      this.parentdata=JSON.stringify(res);
      
      
    })
  }

  fatchdatafromchildtoParent(evt:any){
    console.log(evt);
    this.childdata3=evt


    
  }
  fatchdatafromchildtoParent2(evt:any){
    console.log(evt);
  
    this.childdata4=evt


    
  }

}
