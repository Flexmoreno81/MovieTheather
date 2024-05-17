import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink, RouterModule } from '@angular/router';
import { LoginServciesService } from '../Services/LoginServices/LoginServcies.service';
import { ChangeDetectorRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router, private loginservices: LoginServciesService, private cd: ChangeDetectorRef) { 
    loginservices.authStatus.pipe(takeUntil(this.destorySubject))
    .subscribe((result: boolean) => {
      this.isLoggin = result ; 
    });
  }

  isLoggin  = false ; 
  destorySubject = new Subject() ; 

  ngOnDestroy(): void {
    this.destorySubject.next(true);
    this.destorySubject.complete() ; 
   }


  protected  logo: string = "assets/IMG/Logo.png"  ; 

 

  public onLogOut(): void {
    this.loginservices.LogOut() ; 
    this.route.navigate(['/admin']); 
  } 



  

  ngOnInit() {
    this.isLoggin = this.loginservices.isauthenticated();
  }

}
