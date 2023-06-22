import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostelComponent } from './hostel/hostel.component';
import { StudyroomComponent } from './studyroom/studyroom.component';
import { Route, RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'', component:HostelComponent},
  {path:'studyroom', component:StudyroomComponent}


]

@NgModule({
  declarations: [
    HostelComponent,
    StudyroomComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class FacilitysModule { }
