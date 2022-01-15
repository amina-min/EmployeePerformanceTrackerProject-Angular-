import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './components/admin/employee-add/employee-add.component';
import { HomeComponent } from './components/admin/home/home.component';
import { ShowemployeeComponent } from './components/admin/showemployee/showemployee.component';
import { DashbordComponent } from './components/admin/dashbord/dashbord.component';
import { LoginComponent } from './components/admin/login/login.component';
import { SignupComponent } from './components/admin/signup/signup.component';
import { AdminlayoutComponent } from './components/adminlayout/adminlayout.component';
import { AuthGuard } from './guards/auth.guard';
import { EmpmanageComponent } from './components/admin/empmanage/empmanage.component';
import { EmployeelayoutComponent } from './components/employee/employeelayout/employeelayout.component';
import { EmployeehomeComponent } from './components/employee/employeehome/employeehome.component';

const routes: Routes = [
  
  {path:'login', component:LoginComponent},



  {path:"emp" , component:EmployeelayoutComponent, children:[
    {path:'emphome', component: EmployeehomeComponent},
    {path:'', component: EmployeehomeComponent},
  ]},



  {path:'' , component:AdminlayoutComponent, canActivateChild: [AuthGuard], children:[
    {path:'dash', component: DashbordComponent},
    {path:'', component: DashbordComponent},
    {path : "addemp" , component:EmployeeAddComponent},
    {path : "home" , component:HomeComponent},
    {path : "show" , component:ShowemployeeComponent},
    {path : "empmanage" , component:EmpmanageComponent}

  ]},
  {path: 'signup', component: SignupComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
