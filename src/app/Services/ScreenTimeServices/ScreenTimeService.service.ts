import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { Movies } from '../../../Models/Movies';
import { Observable, catchError, throwError } from 'rxjs';
import { ScreenTimes } from '../../../Models/Screentimes';
import { Router } from '@angular/router';

const SCREENTIME_API = environment.ScreenTimeAPI_BASE_CALL ; 


@Injectable({
  providedIn: 'root'
})
export class ScreenTimeServiceService {

constructor(private xhttp: HttpClient, private route: Router) { }

  public getMoviesFromScreenTime(theather_id: number): Observable<Movies[]>{
   return ( this.xhttp.get<Movies[]>(SCREENTIME_API + '/ByTheather' + theather_id).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 404) {
          this.route.navigate(['/not-found'])
      }
      
      return throwError(() => error);
  })
   )); 
  }
  
  public getScreenTimeInfoFromMovie(movieID: number): Observable<ScreenTimes []> {
    return (this.xhttp.get<ScreenTimes []>(SCREENTIME_API + "/ByMovies/" + movieID).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
            this.route.navigate(['/not-found'])
        }
        
        return throwError(() => error);
    })
    )); 
  }


  public getAllScreentimes (): Observable<ScreenTimes []> {
    return (this.xhttp.get<ScreenTimes[]> (SCREENTIME_API).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
            this.route.navigate(['/not-found'])
        }
        
        return throwError(() => error);
    })
    )) ; 
  } 

}
