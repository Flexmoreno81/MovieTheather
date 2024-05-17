import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Movies } from '../../../Models/Movies';
import { Router } from '@angular/router';


const MOVIES_API_BASE_CALL = environment.MOVIES_BASE_CALL ; 


@Injectable({
  providedIn: 'root'
})
export class MovieServicesService {

constructor(private xhttp: HttpClient,  private route: Router) { }

  public getMovies(): Observable<Movies []> {
    return (this.xhttp.get<Movies []>(MOVIES_API_BASE_CALL).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status ==404) {
        this.route.navigate(['/not-found']); 
      }
      
      return throwError(() => error) ;
    } ))) ; 
  }

  public getMovie(movieID: number): Observable<Movies> {
    return(this.xhttp.get<Movies>(MOVIES_API_BASE_CALL + "/Movies/" + movieID).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
            this.route.navigate(['/not-found'])
        }
        
        return throwError(() => error);
    })
    )); 
  } 
  
  public getRatingList(): Observable<string []> {
    return (this.xhttp.get<string[]>(MOVIES_API_BASE_CALL + "/RatingList").pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
            this.route.navigate(['/not-found'])
        }
        
        return throwError(() => error);
    })
    )) ; 
  }
  
  public getGenreList(): Observable<string[]> {
    return (this.xhttp.get<string[]>(MOVIES_API_BASE_CALL + "/ListOfGenre").pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
            this.route.navigate(['/not-found'])
        }
        
        return throwError(() => error);
    })
    )) ; 
  }
  
  public getRealseYear(): Observable<string[]> {
    return (this.xhttp.get<string[]>(MOVIES_API_BASE_CALL + '/ListOfYears').pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
            this.route.navigate(['/not-found'])
        }
        
        return throwError(() => error);
    })
    )) ;
  }
  


  public removeMovies (id: number): Observable<void> {
    return (this.xhttp.delete<void>(MOVIES_API_BASE_CALL + '/' + id).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
            this.route.navigate(['/not-found'])
        }
        else if (error.status ==401) {
          this.route.navigate(['/401']);
        }
        

        return throwError(() => error);
    })
    )); 
  } 
  

  // Not add a movie, but modify a current movie
  public putMovie(id: number, movie: Movies):Observable<void> {
    return (this.xhttp.put<void>(MOVIES_API_BASE_CALL + '/' + id, movie).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
            this.route.navigate(['/not-found'])
        }
        else if (error.status ==401) {
          this.route.navigate(['/401']);
        }

        return throwError(() => error);
    })
    ));
  }
  
  
  public PostMovie(movie: Movies): Observable<Movies> {
    return (this.xhttp.post<Movies>(MOVIES_API_BASE_CALL + "/", movie).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
            this.route.navigate(['/not-found'])
        }
        else if (error.status ==401) {
          this.route.navigate(['/401']);
        }

        return throwError(() => error);
    })
    )) ; 
  } 
 
}
