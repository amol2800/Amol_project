import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  public value:any;
  constructor( private actrout:ActivatedRoute){
    //  there are two ways to read the data
    // 1.route param
    // console.log(this.actrout);
    // this.actrout.snapshot.params
this.value=this.actrout.snapshot.params
console.log(this.value['id']);

  



  // 2.param Map

  this.actrout.paramMap.subscribe((res:any)=>{
    console.log(res.data);
    
  })
  
    
  }

}
