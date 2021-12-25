import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './components/admin/employee-add/employee-add.component';
import { DashbordComponent } from './components/adminlayout/admin/dashbord/dashbord.component';
import { LoginComponent } from './components/adminlayout/admin/login/login.component';
import { SignupComponent } from './components/adminlayout/admin/signup/signup.component';
import { AdminlayoutComponent } from './components/adminlayout/adminlayout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'admin' , component:AdminlayoutComponent, canActivateChild: [AuthGuard], children:[
    {path:'dash', component: DashbordComponent},
    {path:'', component: DashbordComponent},
    {path : "addemp" , component:EmployeeAddComponent}
  ]},
  {path: 'signup', component: SignupComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
