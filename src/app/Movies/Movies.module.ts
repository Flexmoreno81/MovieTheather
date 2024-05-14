import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie_infoComponent } from './Movie_info/Movie_info.component'; 
import { Movie_ListComponent } from './Movie_List/Movie_List.component'; 
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../Services/Interceptors/auth.interceptor';



const routes: Routes = [


    {path: "", children: [
      {path: "", component: Movie_ListComponent}, 
      {path: ":MovieInfo", component: Movie_infoComponent}
    ] }
  
] ; 

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), RouterModule, 
    FormsModule
  ],
  declarations: [ Movie_ListComponent, Movie_infoComponent], 
  exports: [], 
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class MoviesModule { }
