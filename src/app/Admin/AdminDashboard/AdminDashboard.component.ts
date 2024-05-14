import { Component, OnInit } from '@angular/core';
import { LoginResults } from '../../../Models/LoginResults';
import { CanActivateFn, Router } from '@angular/router';
import { ScreenTimeServiceService } from '../../Services/ScreenTimeServices/ScreenTimeService.service';
import { ScreenTimes } from '../../../Models/Screentimes';
import { AuthGuard } from '../../Services/LoginServices/LoginServcies.service';

@Component({
  selector: 'app-AdminDashboard',
  templateUrl: './AdminDashboard.component.html',
  styleUrls: ['./AdminDashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router, private ScreentimeSservices: ScreenTimeServiceService) { }

  protected screenings: ScreenTimes [] = [] ; 

  
   token: CanActivateFn | null = null ; 



  ngOnInit() { 
    let token: CanActivateFn = AuthGuard;
    
    if (!token) {
      this.router.navigate(['/401']);
    } 

    this.ScreentimeSservices.getAllScreentimes().subscribe((data) => {
      this.screenings = data; 
    });
  }


  
}
