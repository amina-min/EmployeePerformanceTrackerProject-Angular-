import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminlayoutComponent } from './components/adminlayout/adminlayout.component';
import { AdminheaderComponent } from './components/adminlayout/adminheader/adminheader.component';
import { AdminfooterComponent } from './components/adminlayout/adminfooter/adminfooter.component';
import { DashbordComponent } from './components/admin/dashbord/dashbord.component';
import { LoginComponent } from './components/admin/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/admin/signup/signup.component';
import { EmployeeAddComponent } from './components/admin/employee-add/employee-add.component';
import { HomeComponent } from './components/admin/home/home.component';
import { ShowemployeeComponent } from './components/admin/showemployee/showemployee.component';
import { EmpmanageComponent } from './components/admin/empmanage/empmanage.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    AdminlayoutComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    DashbordComponent,
    LoginComponent,
    SignupComponent,
    EmployeeAddComponent,
    HomeComponent,
    ShowemployeeComponent,
    EmpmanageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
