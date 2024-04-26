import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheaterComponent } from './Theater/Theater.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Theather_movieListComponent } from './Theather_movie-list/Theather_movie-list.component'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {path: '', children: [
    {path: '', component: TheaterComponent}, 
    {path: ':Movie_list' , component: Theather_movieListComponent}
  ]}
] ; 
@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(routes), HttpClientModule, FormsModule
  ],
  declarations: [TheaterComponent, Theather_movieListComponent], 
  exports: []
})
export class TheatherssModule { }
