import { Component, OnInit } from '@angular/core';
import { LoginServciesService } from '../../Services/LoginServices/LoginServcies.service';
import { Login } from '../../../Models/Login';
import { LoginResults } from '../../../Models/LoginResults';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-AdminLogin',
  templateUrl: './AdminLogin.component.html',
  styleUrls: ['./AdminLogin.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private loginServices: LoginServciesService, private router: Router) { }


  private login: Login | null = null; 
  protected LoginResult: LoginResults | null = null; 
  protected username: string = '' ;   
  protected passwords: string = '' ; 
  protected wrongCredtional: boolean = false;  
  formSubmitted: boolean = false;

  protected loginInfo(): void {
    this.login = {username: this.username , password: this.passwords};
    this.loginServices.getLogin(this.login).subscribe((data: LoginResults) => {
      this.LoginResult = data;
  
      if (this.LoginResult.success) {
        localStorage.setItem('token', JSON.stringify(this.LoginResult));
        this.wrongCredtional = false; // Set to false when login is successful
        this.formSubmitted = false; 
        this.router.navigate(['/admin/AdminDashboard']);
      } else {
        this.wrongCredtional = true; // Set to true when login fails
        this.formSubmitted = true; 
      }
    });
  }
   

  ngOnInit() {
  }

}
