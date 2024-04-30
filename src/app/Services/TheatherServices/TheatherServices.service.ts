import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Theater } from '../../../Models/Theater';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

const THEATHER_API = environment.THEATHER_BASE_CALL ; 

@Injectable({
  providedIn: 'root'
})
export class TheatherServicesService {

constructor(private xhttp: HttpClient, private route: Router) { }

public getTheather(): Observable<Theater[]> {
  return (this.xhttp.get<Theater[]>(THEATHER_API).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 404) {
          this.route.navigate(['/not-found'])
      }
      
      return throwError(() => error);
  })
  ))  ;
 }

 public getThether_info(id: number): Observable<Theater> {
  return (this.xhttp.get<Theater>(THEATHER_API + "/" + id).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 404) {
          this.route.navigate(['/not-found'])
      }
      
      return throwError(() => error);
  })
  )); 
 } 

}
