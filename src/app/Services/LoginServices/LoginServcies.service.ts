import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Login } from '../../../Models/Login';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { CanActivateFn, Router } from '@angular/router';
import { LoginResults } from '../../../Models/LoginResults';
import { inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


   
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


  protected TOKEN = localStorage.getItem('token') ; 

constructor(private xhttp: HttpClient, private route: Router) { }

  init(): void  {
    if (this.isauthenticated()) {
      this.setAuthStatus(true) ; 
      
    } 
}

isauthenticated(): boolean {
  return (this.getToken() !== null) ; 

}

private setAuthStatus(isauthenticated: boolean): void {
  this._authStatus.next(isauthenticated) ; 
} 

  public tokenKey: string = 'tokenKey';
  private _authStatus = new BehaviorSubject<boolean>(false);
  public authStatus = this._authStatus.asObservable() ; 

  private checkLoginStatus(): boolean {
    const token = localStorage.getItem('token');
    return token !== null;
  }

 

  public getLogin(login: Login): Observable<LoginResults> {
    return this.xhttp.post<LoginResults>(LOGIN_API + '/login', login).pipe(
      tap(loginResult => {
        if (loginResult.success) {
          localStorage.setItem(this.tokenKey, loginResult.token);
          this.setAuthStatus(true);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.route.navigate(['/not-found']);
        } else if (error.status == 401) {
          this.route.navigate(['/401']);
        }
        return throwError(() => error);
      })
    ); 
  }
  


  public getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  public isLogin(): boolean { 
    const token = localStorage.getItem('token');
    return token !== null;
  }
  
  
  
  
  LogOut(): void {
    localStorage.removeItem(this.tokenKey); 
    this.setAuthStatus(false) ;
  } 

  

   
}
