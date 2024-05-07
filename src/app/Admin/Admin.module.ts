import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './AdminLogin/AdminLogin.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './AdminDashboard/AdminDashboard.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../Services/LoginServices/LoginServcies.service';
import { AdminMoviesComponent } from './AdminMovies/AdminMovies.component';
import { AdminTheatherComponent } from './AdminTheather/AdminTheather.component';

 
const routes: Routes = [


  {path: "", children: [
    {path: "", component: AdminLoginComponent}, 
    {path: 'AdminDashboard', children: [
      {path: "", component: AdminDashboardComponent,  canActivate: [AuthGuard]}, 
      {path: 'adminMovies', component: AdminMoviesComponent, canActivate: [AuthGuard]}, 
      {path: 'adminTheather', component: AdminTheatherComponent, canActivate: [AuthGuard]}
    ]}
  ] }

] ; 

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule
  ],
  declarations: [AdminLoginComponent, 
    AdminDashboardComponent, AdminMoviesComponent, AdminTheatherComponent]
})
export class AdminModule { }
