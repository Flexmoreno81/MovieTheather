import { Component, OnInit } from '@angular/core';
import { LoginResults } from '../../../Models/LoginResults';
import { CanActivateFn, Router } from '@angular/router';
import { ScreenTimeServiceService } from '../../Services/ScreenTimeServices/ScreenTimeService.service';
import { ScreenTimes } from '../../../Models/Screentimes';
import { AuthGuard } from '../../Services/LoginServices/LoginServcies.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MovieServicesService } from '../../Services/MovieServices/MovieServices.service';
import { TheatherServicesService } from '../../Services/TheatherServices/TheatherServices.service';
import { Theater } from '../../../Models/Theater';
import { Movies } from '../../../Models/Movies';
import { addScreenTime } from '../../../Models/AddScreentime';
import { AddTheather } from '../../../Models/AddTheater';

@Component({
  selector: 'app-AdminDashboard',
  templateUrl: './AdminDashboard.component.html',
  styleUrls: ['./AdminDashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router, private ScreentimeSservices: ScreenTimeServiceService, 
    private MovieService: MovieServicesService, 
    private TheatherServices: TheatherServicesService) { }

  protected screenings: ScreenTimes [] = [] ; 

  
   token: CanActivateFn | null = null ; 
  
   

   protected MovieList: Movies [] | null = null; 
   protected TheatherList: Theater [] | null = null;  
    protected SelectMovie: string = "" ; 
    protected SelectTheather: string = "";


  ngOnInit() { 
    let token: CanActivateFn = AuthGuard;
    
    if (!token) {
      this.router.navigate(['/401']);
    } 

    this.ScreentimeSservices.getAllScreentimes().subscribe((data) => {
      this.screenings = data; 
    });

    this.MovieService.getMovies().subscribe((data : Movies []) => {
      this.MovieList = data; 
    } );
    
    this.TheatherServices.getTheather().subscribe((data: Theater []) => {
      this.TheatherList = data; 
    }); 
  }

 
  protected editScreenTime(screentime: ScreenTimes): void {
   
    screentime.editableMovie = screentime.editableMovie || { ...screentime.movie };
    screentime.editableTheather = screentime.editableTheather || { ...screentime.theather };
  
    if (!screentime.isEditable) {
     
      Object.assign(screentime.editableMovie, screentime.movie);
      Object.assign(screentime.editableTheather, screentime.theather);
    } else {
     
      Object.assign(screentime.movie, screentime.editableMovie);
      Object.assign(screentime.theather, screentime.editableTheather);
      this.ScreentimeSservices.PutScreenTime(screentime.screeningId, screentime).subscribe();
    }
    screentime.isEditable = !screentime.isEditable;
  }


  
  
  
  
  
  
  
  
  protected removeScreentime(id: number) {
    this.ScreentimeSservices.removeScreentime(id).subscribe() ; 
    

    this.screenings = this.screenings.filter((event: ScreenTimes) => {
      return event.screeningId !== id; 
    });

    
  }

  protected onSelectMovies(event: any) {
    this.SelectMovie = event.target.value;

    
  } 
  

  protected onSelectTheather(event: any) {
    this.SelectTheather = event.target.value; 

    
  } 
}
