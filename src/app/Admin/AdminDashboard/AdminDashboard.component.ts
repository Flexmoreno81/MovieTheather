import { Component, OnInit } from '@angular/core';
import { LoginResults } from '../../../Models/LoginResults';
import { Router } from '@angular/router';
import { ScreenTimeServiceService } from '../../Services/ScreenTimeServices/ScreenTimeService.service';
import { ScreenTimes } from '../../../Models/Screentimes';

@Component({
  selector: 'app-AdminDashboard',
  templateUrl: './AdminDashboard.component.html',
  styleUrls: ['./AdminDashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router, private ScreentimeSservices: ScreenTimeServiceService) { }

  protected screenings: ScreenTimes [] = [] ; 

  
   

  private tokenObject: LoginResults | null = null; 

  ngOnInit() {
    let tokenObjectstr: string | null = localStorage.getItem('token');
    if (tokenObjectstr) {
       this.tokenObject = JSON.parse(tokenObjectstr);
  
    } else {
      this.router.navigate(['/401']); 
    }

    this.ScreentimeSservices.getAllScreentimes().subscribe((data) => {
      this.screenings = data; 
    });
  }

}
