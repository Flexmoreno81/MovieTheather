import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
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

 
 public removeTheather (id: number): Observable<void> {

  return (this.xhttp.delete<void>(THEATHER_API + "/" + id).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 404) {
          this.route.navigate(['/not-found'])
      }
      
      else if ((error.status == 401)) {
        this.route.navigate(["/401"]);
        
      }
      
      else if (error.status == 500) {
        
        
      } 
      return throwError(() => error);
  })
  )) ; 
 }
 
 
 public PutTheather(id: number, theather: Theater): Observable<void> {
  return (this.xhttp.put<void>(THEATHER_API + "/" + id, theather).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 404) {
          this.route.navigate(['/not-found'])
      }
      
      else if ((error.status == 401)) {
        this.route.navigate(["/401"]);
      } 
      return throwError(() => error);
  })
  )) ;
 } 

}
