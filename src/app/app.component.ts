import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo3_routing';

  constructor(private route:Router){

    
  }

  departmentfunction(){
    this.route.navigate(['dept/12'])
  }

  facultyfun(){
    this.route.navigateByUrl("faculty")
  }
}
