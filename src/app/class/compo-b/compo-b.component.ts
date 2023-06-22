import { Component } from '@angular/core';
import { DataService } from '../service file/data.service';

@Component({
  selector: 'app-compo-b',
  templateUrl: './compo-b.component.html',
  styleUrls: ['./compo-b.component.css']
})
export class CompoBComponent {

  public dataFromSER:any;
  public DataFromCompB="this is the data from ComponenB";
  
  constructor(private dataser:DataService){
    this.Getdata()
  }
  setdatainSrvice(){
    this.dataser.setdata(this.DataFromCompB)
  }

  Getdata(){                                           //this method need to call in constuctor
    this.dataser.getdata().subscribe((res:any)=>{
      this.dataFromSER=res;
    })
  }

}
