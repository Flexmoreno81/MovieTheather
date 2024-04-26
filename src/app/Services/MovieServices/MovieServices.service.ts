import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../../../Models/Movies';

const MOVIES_API_BASE_CALL = environment.MOVIES_BASE_CALL ; 


@Injectable({
  providedIn: 'root'
})
export class MovieServicesService {

constructor(private xhttp: HttpClient) { }

  public getMovies(): Observable<Movies []> {
    return (this.xhttp.get<Movies []>(MOVIES_API_BASE_CALL)) ; 
  }
  
  public getRatingList(): Observable<string []> {
    return (this.xhttp.get<string[]>(MOVIES_API_BASE_CALL + "/RatingList")) ; 
  }
  
  public getGenreList(): Observable<string[]> {
    return (this.xhttp.get<string[]>(MOVIES_API_BASE_CALL + "/ListOfGenre")) ; 
  }
  
  public getRealseYear(): Observable<string[]> {
    return (this.xhttp.get<string[]>(MOVIES_API_BASE_CALL + '/ListOfYears')) ;
  } 
}
