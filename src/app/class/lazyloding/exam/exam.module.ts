import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeexamComponent } from './homeexam/homeexam.component';
import { UgExamComponent } from './ug-exam/ug-exam.component';
import { PgExamComponent } from './pg-exam/pg-exam.component';
import {  RouterModule, Routes } from '@angular/router';

const routs:Routes=[
  {path:'',component:HomeexamComponent},
  {path:'pg',component:PgExamComponent},
  {path:'ug',component:UgExamComponent}

]


@NgModule({
  declarations: [
    HomeexamComponent,
    UgExamComponent,
    PgExamComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routs)]
  ]
})
export class ExamModule { }
