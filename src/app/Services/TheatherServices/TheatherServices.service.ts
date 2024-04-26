import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Theater } from '../../../Models/Theater';
import { Observable } from 'rxjs';

const THEATHER_API = environment.THEATHER_BASE_CALL ; 

@Injectable({
  providedIn: 'root'
})
export class TheatherServicesService {

constructor(private xhttp: HttpClient) { }

public getTheather(): Observable<Theater[]> {
  return (this.xhttp.get<Theater[]>(THEATHER_API))  ;
 }

 public getThether_info(id: number): Observable<Theater> {
  return (this.xhttp.get<Theater>(THEATHER_API + "/" + id)); 
 } 

}
