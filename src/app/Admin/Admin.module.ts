import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './AdminLogin/AdminLogin.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './AdminDashboard/AdminDashboard.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../Services/LoginServices/LoginServcies.service';

 
const routes: Routes = [


  {path: "", children: [
    {path: "", component: AdminLoginComponent}, 
    {path: ":AdminDashboard", component: AdminDashboardComponent,  canActivate: [AuthGuard]}
  ] }

] ; 

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule
  ],
  declarations: [AdminLoginComponent, AdminDashboardComponent]
})
export class AdminModule { }
