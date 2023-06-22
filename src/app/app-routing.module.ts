import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './class/home/home.component';
import { AddmitionComponent } from './class/addmition/addmition.component';
import { DepartmentComponent } from './class/department/department.component';
import { LoginComponent } from './class/login/login.component';
import { FacultyComponent } from './class/faculty/faculty.component';
// import { ErrorComponent } from './class/error/error.component';
import { AuthGuard } from './class/auth.guard';
import { ParentComponent } from './dataComunication/parent/parent.component';
import { CompoAComponent } from './class/compo-a/compo-a.component';
import { CompoBComponent } from './class/compo-b/compo-b.component';
import { Parent2Component } from './class/datacomunication -2/parent2/parent2.component';

const routes: Routes = [
{  path:"" ,component:HomeComponent},
{path:'add' ,component:AddmitionComponent},
{path:'dept/:id ',component:DepartmentComponent,canActivate:[AuthGuard]},
{path:'faculty',component:FacultyComponent},
{path:'login',component:LoginComponent},
{path:'parent2',component:Parent2Component},
{path:'comuni',component:ParentComponent},
{path:'compoA',component:CompoAComponent},
{path:'compoB',component:CompoBComponent},
{path:'exam',loadChildren:()=>import('./class/lazyloding/exam/exam.module').then(mod=>mod.ExamModule)},



{path:'facility' ,loadChildren:()=>import('./class/lazyloding/facilitys/facilitys.module').then(mod=>mod.FacilitysModule)}










// {path:'**',component:ErrorComponent}
// {path:'**' , redirectTo:''}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
