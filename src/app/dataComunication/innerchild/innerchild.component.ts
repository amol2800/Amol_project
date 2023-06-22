import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-innerchild',
  templateUrl: './innerchild.component.html',
  styleUrls: ['./innerchild.component.css']
})
export class InnerchildComponent {
@Input()  data1:any;
@Input()  data2:any;

@Output() dataevent=new EventEmitter<any>();
@Output() dataevent2=new EventEmitter<any>();

public datafromchild:any='this is the child data'
public datafromchild2:any='this is the child data-2'

ngOnInit(){           
  console.log(this.data1)
  //here  ngOnInit important becouse need to initilize varable.....
  
console.log(this.data2)

}
senddatafromparenttochild(){
  this.dataevent.emit(this.datafromchild)
  this.dataevent2.emit(this.datafromchild2)

  
}

}
