import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component {

  public parentData:any='this is data from parent';
  public getchildata:any;
  public data:any;

  @ViewChild (ChildComponent) childdata:any

  ngAfterViewInit(){
console.log(    this.childdata.dataofchild  );
this.data=this.childdata.dataofchild
  }
  

  getdataofchild(dt:any){
   this.getchildata=dt;
   console.log(this.getchildata);
   
  }

  
  

}
