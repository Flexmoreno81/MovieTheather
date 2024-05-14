import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Login } from '../../../Models/Login';
import { Observable, catchError, throwError } from 'rxjs';
import { CanActivateFn, Router } from '@angular/router';
import { LoginResults } from '../../../Models/LoginResults';
import { inject } from '@angular/core';


   
  const LOGIN_API: string = environment.LOGIN_BASE_CALL ; 

  // this injection is used for the route only in case they try to nagtive in broswer unauthicated // 
  export const AuthGuard: CanActivateFn = () => {
    const router = inject(Router);
    if(localStorage.getItem('token')){
      return true;
    } else {
      router.navigate(['/401']);
      return false;
    }
  };

@Injectable({
  providedIn: 'root'
})
export class LoginServciesService {

constructor(private xhttp: HttpClient, private route: Router) { }

  public getLogin(login: Login): Observable<LoginResults> {
    return this.xhttp.post<LoginResults>(LOGIN_API + '/login', login).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.route.navigate(['/not-found']);
        }

        else if (error.status == 401) {
          this.route.navigate(['/401']);
        }
        return throwError(() => error);
      })
    ); 
  }


  public getToken (): string | null {
    return (localStorage.getItem('token')) ; 
  } 

   
}
