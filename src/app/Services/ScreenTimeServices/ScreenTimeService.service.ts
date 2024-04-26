import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http'; 
import { Movies } from '../../../Models/Movies';
import { Observable } from 'rxjs';
import { ScreenFilter } from '../../../Models/ScreenFilter';

const SCREENTIME_API = environment.ScreenTimeAPI_BASE_CALL ; 


@Injectable({
  providedIn: 'root'
})
export class ScreenTimeServiceService {

constructor(private xhttp: HttpClient) { }

  public getMoviesFromScreenTime(theather_id: number): Observable<Movies[]>{
   return ( this.xhttp.get<Movies[]>(SCREENTIME_API + '/ByTheather' + theather_id)); 
  } 

}
