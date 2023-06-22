import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './class/home/home.component';
import { AddmitionComponent } from './class/addmition/addmition.component';
import { DepartmentComponent } from './class/department/department.component';
import { LoginComponent } from './class/login/login.component';
import { FacultyComponent } from './class/faculty/faculty.component';
import { ErrorComponent } from './class/error/error.component';
import {     HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './dataComunication/parent/parent.component';
import { InnerchildComponent } from './dataComunication/innerchild/innerchild.component';
import { OuterchildComponent } from './dataComunication/outerchild/outerchild.component';
import { CompoAComponent } from './class/compo-a/compo-a.component';
import { CompoBComponent } from './class/compo-b/compo-b.component';
import { Parent2Component } from './class/datacomunication -2/parent2/parent2.component';
import { ChildComponent } from './class/datacomunication -2/child/child.component';
import { CustomPipe } from './custom.pipe';
import { Demo1Component } from './demo1/demo1.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddmitionComponent,
    DepartmentComponent,
    LoginComponent,
    FacultyComponent,
    ErrorComponent,
    ParentComponent,
    InnerchildComponent,
    OuterchildComponent,
    CompoAComponent,
    CompoBComponent,
    Parent2Component,
    ChildComponent,
    CustomPipe,
    Demo1Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
