import { Component } from '@angular/core';
import { DataService } from '../service file/data.service';

@Component({
  selector: 'app-compo-a',
  templateUrl: './compo-a.component.html',
  styleUrls: ['./compo-a.component.css']
})
export class CompoAComponent {

  public compoAdata:any="this is data from component A"
  public dataFromser:any
  constructor(private serdata:DataService){
   this. getdata()
                          
  }


  setdatainSrvice(){
this.serdata.setdata(this.compoAdata)
  }

  getdata(){
    this.serdata.getdata().subscribe((res:any)=>{    //i can directly create this method  in constructor  but here i sperate create this method and call that in constructor.
      this.dataFromser=res;
  })
 


}
}