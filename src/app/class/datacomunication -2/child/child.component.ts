import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() dataevent:any;  
  
  @Output() evendata= new EventEmitter<any>()

  public dataofchild='this is the cilds data';

  



  ngOnInit(){
    console.log(this.dataevent);
    
  }
  senddataToParent(){
    this.evendata.emit(this.dataofchild)

  }


}
